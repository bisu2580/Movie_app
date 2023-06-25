import { useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const TopRated = () => {
	const onTabChange = (tab) => {
		setEndPoint(tab == "Movies" ? "movie" : "tv");
	};
	const [endPoint, setEndPoint] = useState("movie");
	const { data, loading } = useFetch(`/${endPoint}/top_rated`);
	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Top Rated</span>
				<SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} endpoint={endPoint} />
		</div>
	);
};

export default TopRated;
