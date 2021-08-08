import React from 'react'
import CardItem from './CardItem'

function NewsFeed(props) {

    const { newsFeeds } = props
    return (
        <div>
            {
                newsFeeds.map(newsFeed => {
                    return (
                        <CardItem news={newsFeed}></CardItem>
                    )
                })
            }
        </div>
    )
}

export default NewsFeed
