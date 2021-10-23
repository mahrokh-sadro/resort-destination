import ResortCard from './ResortCard'

const ResortList = () => {
    return (

        //image={}
        <div class="container">
            <h1>Featured Resort</h1>

            <ResortCard title={"resort 1"} price={30} />
            <ResortCard title={"resort 2"} price={40} />
            <ResortCard title={"resort 3"} price={66} />
            <ResortCard title={"resort 4"} price={86} />
        </div>

    )
}

export default ResortList
