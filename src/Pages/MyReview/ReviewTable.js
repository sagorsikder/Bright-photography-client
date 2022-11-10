import React from 'react';

const ReviewTable = (props) => {
    console.log(props.review)

    const {serviceName,image,review,phone,email} = props.review;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image?image:''} alt="Avatar Tailwind CSS Component" />
                
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{email}</div>
              <div className="text-sm opacity-50">{phone}</div>

            </div>
          </div>
        </td>
        <td>
  
          <br/>
          <span className="badge badge-ghost badge-sm">{serviceName}</span>
        </td>
        <td><h1>{review}</h1>
        <button className='btn btn-warning w-2/4 h-2/4 text-xs'>Edit Review</button>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>
    );
};

export default ReviewTable;