import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Table from 'antd/lib/table';
import Loading from '../../components/Loading';
import Columns from './Columns';

const COMPANY = gql`
  {
    companyLists {
      id
      companyName
      country
      catchPhrase
    }
  }
`;

const CompanyLists: FC = () => {
  const { loading, error, data } = useQuery(COMPANY);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error :(</p>;
  return (
    <div className="companyLists-section">
      <Link to="/test" className="link">
        Back
      </Link>
      <div>Company Lists</div>
      <Table columns={Columns} dataSource={data.companyLists} />
    </div>
  );
};

export default CompanyLists;
