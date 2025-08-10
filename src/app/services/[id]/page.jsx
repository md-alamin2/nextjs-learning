import React from 'react';

export default function ServiceDetailsPage({params}) {
    const id = params.id;
  return (
    <div>
      <h2 className='text-5xl font-bold'>Service No. {id}</h2>
    </div>
  );
}