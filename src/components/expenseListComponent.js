import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExportListComponent=({description,amount,createdAt,dispatch,id})=>(
        <Link className="list-item" to={`/edit/${id}`}>
            <div >
            <h3 className="list-item__title">{description}</h3>
            <div className="list-item__subtitle">
                    {moment(createdAt).format('Do MMMM,YYYY')}
            </div>
            </div>
            <h3 className="list-item__data">
                {numeral(amount/100).format('$0,0.00')}
            </h3>
        </Link>
);

export default connect()(ExportListComponent);