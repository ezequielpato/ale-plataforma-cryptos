import { BsPatchCheckFill } from 'react-icons/bs';

const Privacy = () => {
	return (
		<div className='main-conteiner main-bggrey'>
			<div className='main-wrap privacy-wrap'>
				<h2 className='main-textlight'>Privacy Policy</h2>

				<div className='privacy-box main-bggrey1'>
					<h6 className='main-textgrey '>
						This Privacy Policy governs the manner in which the School collects, uses,
						maintains and discloses information collected from users (each, a “Student”) of
						the School. This Privacy Policy applies to the School and all Courses offered by
						the School.
					</h6>
					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>Personal identification information</h4>
					</div>
					<h6 className='main-textgrey '>
						We may collect personal identification information from Students in a variety of
						ways, including, but not limited to, when Students enroll in the School or a
						Course within the School, subscribe to a newsletter, and in connection with other
						activities, services, features, or resources we make available in our School.
						Students may visit the School anonymously. We will collect personal identification
						information from Students only if they voluntarily submit such information to us.
						Students can refuse to supply personal identification information but doing so may
						prevent them from engaging in certain School related activities.
					</h6>

					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>How we use collected information</h4>
					</div>
					<h6 className='main-textgrey'>
						The School may collect and use Students’ personal identification information for
						the following purposes: To improve customer service Information you provide helps
						us respond to your customer service requests and support needs more efficiently.
						To personalize user experience We may use information in the aggregate to
						understand how our Students as a group use the services and resources provided in
						our School. To send periodic emails We may use Student email addresses to send
						Students information and updates pertaining to their order. Student email
						addresses may also be used to respond to Student inquiries, questions, or other
						requests.
					</h6>

					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>Sharing your personal information</h4>
					</div>
					<h6 className='main-textgrey'>
						We do not sell, trade, or rent Student personal identification information to
						others.
					</h6>

					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>Third party websites</h4>
					</div>
					<h6 className='main-textgrey'>
						Student may find advertising or other content in our School that link to the
						websites and services of our partners, suppliers, advertisers, sponsors, licensors
						and other third parties. We do not control the content or links that appear on
						these websites and are not responsible for the practices employed by websites
						linked to or from our School. In addition, these websites or services, including
						their content and links, may be constantly changing. These websites and services
						may have their own privacy policies and customer service policies. Browsing and
						interaction on any other website, including websites which have a link to our
						Student, is subject to that website's own terms and policies.
					</h6>

					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>Changes to this Privacy Policy</h4>
					</div>
					<h6 className='main-textgrey'>
						The School has the discretion to update this Privacy Policy at any time. We
						encourage Students to frequently check this page for any changes. You acknowledge
						and agree that it is your responsibility to review this Privacy Policy
						periodically and become aware of modifications.
					</h6>

					<div className='privacy-icon-div'>
						<BsPatchCheckFill className='privacy-icon' />
						<h4 className='main-textlight'>Your acceptance of these terms</h4>
					</div>
					<h6 className='main-textgrey'>
						By enrolling in the School, you signify your acceptance of this Privacy Policy. If
						you do not agree to this Privacy Policy, please do not enroll in the School. Your
						continued enrollment in the School following the posting of changes to this
						Privacy Policy will be deemed your acceptance of those changes.
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
