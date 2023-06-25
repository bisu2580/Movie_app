import { useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
const Trending = () => {
	const onTabChange = (tab) => {
		setEndPoint(tab == "Day" ? "day" : "week");
	};
	const [endPoint, setEndPoint] = useState("day");
	const { data, loading } = useFetch(`/trending/all/${endPoint}`);
	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={loading} />
		</div>
	);
};

export default Trending;
