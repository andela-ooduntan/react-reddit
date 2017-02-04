import React from 'react';
import {Media} from 'react-bootstrap';
import moment from 'moment';
import {timeago} from 'jquery';


const ReditData = ({reddit, show}) => {
  let table = show ? (<div className="loader"></div>) : '';
  if (reddit) {
    table = reddit.map((redditArray, index) => {
      let {data} = redditArray;
      return(
        <Media key={data.id}>
        <Media.Left align="top">
          <img width={64} height={64} src={data.header_img} alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{data.title}</Media.Heading>
          <p>{data.public_description}</p>
          <p>{`${data.subscribers} Subscribers, in community, Created on ${moment.unix(data.created_utc).toDate()}`}</p>
        </Media.Body>
      </Media>
      )
    })
  }
  return (
    <div>
      {table}
    </div>
  )
}

export default ReditData;
