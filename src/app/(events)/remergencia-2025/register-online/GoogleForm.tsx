export default function EmbeddedGoogleForm() {
	return (
		<div className="p-4">
			<iframe
				// src="https://docs.google.com/forms/d/e/1FAIpQLSf_R5nkYtM8ZZM3DLAoTpwhW_dgbPY2eGygosV-A4D4Areb-w/viewform?embedded=true"
				src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}
				width="100%"
				height="800"
				title="Google Form"
			>
				Loading…
			</iframe>
			{/* <iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSf_R5nkYtM8ZZM3DLAoTpwhW_dgbPY2eGygosV-A4D4Areb-w/viewform?embedded=true"
				width="640"
				height="9516"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Loading…
			</iframe> */}
		</div>
	);
}
