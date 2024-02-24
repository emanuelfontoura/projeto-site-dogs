import React from "react";
import Head from "../Helper/Head.jsx"
import useFetch from "../../Hooks/useFetch.jsx"
import { STATS_GET } from "../../api.js"
import Loading from "../Helper/Loading.jsx"
import Error from "../Helper/Error.jsx"
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs.jsx"))

const UserStats = () => {
    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        async function getData(){
            const {url, options} = STATS_GET()
            await request(url, options)
        }
        getData()
    }, [])

    if(loading) return <Loading />
    if(error) return <Error error={error} />
    if(data){
        return <React.Suspense fallback={<div></div>}>
            <Head title='Estatísticas' description='Página com as estatísticas do usuário.' />
            <UserStatsGraphs data={data} />
        </React.Suspense>
    }else{
        return null
    }
}

export default UserStats