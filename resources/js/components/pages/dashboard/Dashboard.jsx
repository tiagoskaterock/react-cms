import MainCards from "../../content/mainCards/MainCards";
import PageHeading from "../../content/PageHeading";

export default function Dashboard(){
    return (
        <div className="container-fluid">
            <PageHeading title="Dashboard" />
            <MainCards />
        </div>
    )
}