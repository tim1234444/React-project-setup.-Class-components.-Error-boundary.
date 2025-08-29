import { Suspense } from "react";
import CounrtyTable from "./pages/CountryTable";
import { Spinner } from "./components/CountryTable/Spinner";

export default function Page(){
 return (<Suspense fallback = {<Spinner/>}><CounrtyTable></CounrtyTable></Suspense>)
}