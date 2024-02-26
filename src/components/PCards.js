import { Col } from "react-bootstrap";

export const PCards = ({ title, description, imgUrl, href, alt }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={alt} />
        <div className="proj-txtx">
          <h4>
            <a href={href}>{title}</a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
