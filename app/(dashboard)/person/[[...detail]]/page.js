import React from 'react'

const DetailPersonPage = ({ params }) => {

    const urlParams = params.detail

    let lists;
    if (urlParams.length) {
        lists = urlParams.map(up => <li>{up}</li>)
    } else {
        lists = <li>No Data</li>
    }

    return (
        <div>DetailPersonPage
            <ul>
                {lists}
            </ul>
        </div>

    )
}

export default DetailPersonPage