import React from 'react';

export default function ItemDetails(props: any) {
  console.log(props);
  return <div>{props.match.params.id}</div>;
}
