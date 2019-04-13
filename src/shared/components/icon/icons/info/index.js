import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import Svg, {
	Path,
} from 'react-native-svg';

const InfoIconComponent = (props) => {
	const {
		color,
	} = props;

	return (
		<Svg
			{
			...props
			}
			viewBox="0 0 24 24"
		>
			<Path
				fill-rule="evenodd"
				fill={color}
				d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M13.0036109,13.9983464 L14.0029544,13.9983464 L14.0029544,15.9983464 L10.0029544,15.9983464 L10.0029544,13.9983464 L11.0029544,13.9983464 L11.0029544,11.9983464 L10.0029544,11.9983464 L10.0029544,9.99834639 L13.0036109,9.99834639 L13.0036109,13.9983464 Z M12.0003283,8.99834639 C11.4478622,8.99834639 11,8.55063114 11,7.99834639 C11,7.44606164 11.4478622,6.99834639 12.0003283,6.99834639 C12.5527943,6.99834639 13.0006565,7.44606164 13.0006565,7.99834639 C13.0006565,8.55063114 12.5527943,8.99834639 12.0003283,8.99834639 Z"
			/>
		</Svg>
	);
};

InfoIconComponent.defaultProps = {
	color: '',
};

InfoIconComponent.propTypes = {
	color: PropTypes.string
};

export default InfoIconComponent;