import PropTypes from 'prop-types'; // Pour valider les types des props

// Composant Button réutilisable
// eslint-disable-next-line react/prop-types
const MainButton = ({ href, title}) => {
  return (
    <a
      href={href}
      className={"px-5 py-3 text-lg bg-gray-200 border-none transition duration-300 ease-in-out hover:bg-gray-300"}
      style={{ ...defaultStyle }} // Combine les styles par défaut avec ceux fournis en props
    >
      {title}
    </a>
  );
};

// Styles par défaut pour le bouton
const defaultStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: '#fff',
  transition: 'background-color 0.3s ease',
};

// Validation des types des props avec PropTypes
MainButton.propTypes = {
  title: PropTypes.string.isRequired,  // Le texte du bouton est requis
  href: PropTypes.string,

};

export default MainButton;
