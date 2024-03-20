import PropTypes from "prop-types";

export const CompanyView = ({ title, company }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul className="list-group">
        <li className="list-group-item active">{company.name}</li>
        <li className="list-group-item">{company.fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};
