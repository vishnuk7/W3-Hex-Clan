import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FiCamera } from 'react-icons/fi';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center',
};

export const ReportModal = (props) => {
	const [open, setOpen] = useState(false);

	const onCloseModal = () => {
		setOpen(false);
	};

	return (
		<div style={styles}>
			<Modal open={props.open} onClose={onCloseModal}>
				<div className='px-4 py-4'>
					<input type='text' placeholder='Enter your message' />
				</div>

				<div className='px-4 py-4 relative'>
					<FiCamera size={50} />
					<input
						type='file'
						className='opacity-0 absolute top-0 bottom-0 right-0 left-0 w-full h-full'
						accept='image/*'
						capture
					/>
				</div>
			</Modal>
		</div>
	);
};
