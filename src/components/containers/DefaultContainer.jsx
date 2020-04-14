import React from "react";
import { makeStyles } from "@material-ui/core/";
import PropTypes from "prop-types";
const DefaultContainer = props => {
  const s = useStyles();
  const { headline, children, footer, center } = props;
  return (
    <div className={s.root}>
      <header
        className={s.header}
        style={{ textAlign: center ? "center" : "left" }}
      >
        <p>{headline}</p>
      </header>

      <section className={s.content}>{children}</section>

      {footer && <footer className={s.footer}>footer</footer>}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: { borderRadius: 10, background: "#FFF" },
  header: { padding: 10, borderBottom: "0.5px solid #EEE" },
  content: { padding: 10 },
  footer: { padding: 10, borderTop: "0.5px solid #EEE" }
}));

export default DefaultContainer;

DefaultContainer.propTypes = {
  headline: PropTypes.string,
  children: PropTypes.array.isRequired,
  center: PropTypes.bool,
  footer: PropTypes.object
};

DefaultContainer.defaultProps = {
  headline: "No headline written",
  center: false
};
