import MainCards from "./mainCards/MainCards";
import PageHeading from "./PageHeading";

export default function Content(){
    return (
        <div className="container-fluid">
            <PageHeading />
            <MainCards />
        </div>
    )
}