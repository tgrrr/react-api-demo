import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { A } from "./../../../../common/components/ui";

class ArticleDetails extends PureComponent {
  render() {
    const { title, link, dateOfPublication } = this.props;
    return (
      <div>
        <div>
          <A target="_blank" href={link}>
            {title}
          </A>
        </div>
        <div>Published date: {dateOfPublication}</div>
      </div>
    );
  }
}

ArticleDetails.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  dateOfPublication: PropTypes.string
};

export default ArticleDetails;
