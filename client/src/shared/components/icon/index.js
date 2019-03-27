import React from 'react';
import PropTypes from 'prop-types';
import constants from 'src/modules/constants';
import styled from 'styled-components/native';

import {
	ArrowLeftIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CloseIcon,
	BagIcon,
	InfoIcon,
	SpinnerIcon,
	BagCheckIcon,
	RadioCheckedIcon,
	RadioIcon,
	VisaCardIcon,
	MasterCardIcon
} from 'src/shared/components/icon/icons';

const getIconColor = (props) => {
	const {
		dark: isDarkIcon,
		primary: isPrimaryIcon,
		default: isDefaultIcon
	} = props;

	if (isDarkIcon) {
		return constants.COLORS.DARK;
	}

	if (isPrimaryIcon) {
		return constants.COLORS.PRIMARY;
	}

	if (isDefaultIcon) {
		return constants.COLORS.DEFAULT;
	}

	return 'transparent';
};

const Wrapper = styled.View`
	display: flex;
	align-items: flex-start;
`;

const TagContainer = styled.View`
	position: absolute;
	z-index: 1;
	margin-top: -5;
	right: 0;
`;

const Tag = styled.View`
	width: 16;
	height: 16;
	background-color: ${constants.COLORS.PRIMARY};
	border-radius: 50;
`;

const IconContainer = styled.View`
	margin-right: ${props => (props.tag ? 5 : 0)}
`;

const renderIcon = (props) => {
	const {
		icon
	} = props;

	switch (icon) {
		case 'arrow-left':
			return (
				<ArrowLeftIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'chevron-left':
			return (
				<ChevronLeftIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'chevron-right':
			return (
				<ChevronRightIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'close':
			return (
				<CloseIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'bag':
			return (
				<BagIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'info':
			return (
				<InfoIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'spinner':
			return (
				<SpinnerIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'bag-check':
			return (
				<BagCheckIcon
					{
					...props
					}
				/>
			);

		case 'radio-checked':
			return (
				<RadioCheckedIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'radio':
			return (
				<RadioIcon
					{
					...props
					}
					color={getIconColor(props)}
				/>
			);

		case 'visa-card':
			return (
				<VisaCardIcon
					{
					...props
					}
				/>
			);

		case 'master-card':
			return (
				<MasterCardIcon
					{
					...props
					}
				/>
			);

		default:
			return null;
	}
};

const IconComponent = (props) => {
	const {
		tag
	} = props;

	return (
		<Wrapper>
			{
				tag && (
					<TagContainer>
						<Tag />
					</TagContainer>
				)
			}
			<IconContainer
				tag={tag}
			>
				{
					renderIcon(props)
				}
			</IconContainer>
		</Wrapper>
	);
};

renderIcon.defaultProps = {
	icon: ''
};

renderIcon.propTypes = {
	icon: PropTypes.string
};

IconComponent.defaultProps = {
	tag: false
};

IconComponent.propTypes = {
	tag: PropTypes.bool,
};

export default IconComponent;
