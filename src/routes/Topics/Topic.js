/**
 * Created by Freeman on 2017/3/22.
 */
import React from 'react';
const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Topic;