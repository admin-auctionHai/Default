import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FeedbackComponent from "../../features/info/feedbackComponent";
import DisclaimerComponent from "../../features/info/disclaimerComponent";
import TermsOfUseComponent from "../../features/info/termsOfUseComponent";
import WebsiteAccessibilityComponent from "../../features/info/websiteAccessibilityComponent";
import ContactUsComponent from "../../features/info/contactUsComponent";
import PrivacyPolicyComponent from "../../features/info/privacyPolicyComponent";
import HyperlinkingPolicyComponent from "../../features/info/hyperlinkingPolicyComponent";
import CopyrightPolicyComponent from "../../features/info/copyrightPolicyComponent";
import ContentArchivalPolicyComponent from "../../features/info/contentArchivalPolicyComponent";
import WebsiteSecurityPolicyComponent from "../../features/info/websiteSecurityPolicyComponent";
import WebsiteMonitoringPolicyComponent from "../../features/info/websiteMonitoringPolicyComponent";
import ContentReviewPolicyComponent from "../../features/info/contentReviewPolicyComponent";
import WebsiteContingencyManagementPolicyComponent from "../../features/info/websiteContingencyManagementPolicyComponent";
import ContentContributionModerationApprovalPolicyComponent from "../../features/info/contentContributionModerationApprovalPolicyComponent";

const PolicyPage = () => {
	const { what } = useParams(); // Get the policy type from the URL
	const [currentSelectedOption, setCurrentSelectedOption] = useState("");
	const [optionData, setOptionData] = useState();

	const componentMap = {
		feedback: FeedbackComponent,
		disclaimer: DisclaimerComponent,
		termsOfUse: TermsOfUseComponent,
		websiteAccessibility: WebsiteAccessibilityComponent,
		contactUs: ContactUsComponent,
		privacyPolicy: PrivacyPolicyComponent,
		hyperlinkingPolicy: HyperlinkingPolicyComponent,
		copyrightPolicy: CopyrightPolicyComponent,
		contentArchivalPolicy: ContentArchivalPolicyComponent,
		websiteSecurityPolicy: WebsiteSecurityPolicyComponent,
		websiteMonitoringPolicy: WebsiteMonitoringPolicyComponent,
		contentReviewPolicy: ContentReviewPolicyComponent,
		websiteContingencyManagementPolicy:
		WebsiteContingencyManagementPolicyComponent,
		contentContributionModerationApprovalPolicy:
		ContentContributionModerationApprovalPolicyComponent,
	};
	// Data for each policy
	console.log("Routed to orrect Page", what);
	const policyDescriptions = {
		disclaimer: {
			name: "Disclaimer",
			description: `This website is designed, developed, and maintained by MSTC Limited, A Government of India Enterprise.
                      Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
                      the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity 
                      or doubts, users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain 
                      appropriate professional advice.
                      Under no circumstances will MSTC Limited be liable for any expense, loss or damage including, without limitation, 
                      indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, or loss of 
                      use, of data, arising out of or in connection with the use of this website.`,
		},
		terms: {
			name: "Terms And Condition",
			description: `This website is designed, developed, and maintained by MSTC Limited, A Government of India Enterprise.
                      Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
                      the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity 
                      or doubts, users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain 
                      appropriate professional advice.
                      Under no circumstances will MSTC Limited be liable for any expense, loss or damage including, without limitation, 
                      indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, or loss of 
                      use, of data, arising out of or in connection with the use of this website.`,
		},
		"website-accessibility": {
			name: "Website Accessibility",
			description: `This website is designed, developed, and maintained by MSTC Limited, A Government of India Enterprise.
                      Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
                      the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity 
                      or doubts, users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain 
                      appropriate professional advice.
                      Under no circumstances will MSTC Limited be liable for any expense, loss or damage including, without limitation, 
                      indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, or loss of 
                      use, of data, arising out of or in connection with the use of this website.`,
		},
		"privacy-policy": {
			name: "Privacy Policy",
			description: `This website is designed, developed, and maintained by MSTC Limited, A Government of India Enterprise.
                      Though all efforts have been made to ensure the accuracy and currency of the content on this website, 
                      the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity 
                      or doubts, users are advised to verify/check with the Company/Department(s) and/or other source(s), and to obtain 
                      appropriate professional advice.
                      Under no circumstances will MSTC Limited be liable for any expense, loss or damage including, without limitation, 
                      indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, or loss of 
                      use, of data, arising out of or in connection with the use of this website.`,
		},
		"hyperlinking-policy": {
			name: "Hyperlinking Policy",
			description: `These terms and conditions shall be governed by and construed in accordance with the Indian Laws.
                      Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts 
                      at Kolkata, India. The information posted on this website could include hypertext links or pointers to information 
                      created and maintained by non-Government/private organizations. MSTC Limited is providing these links and pointers 
                      solely for your information and convenience. When you select a link to an outside website, you are leaving MSTC Limited’s 
                      official website and are subject to the privacy and security policies of the owners/sponsors of the outside website.`,
		},
		"copyright-policy": {
			name: "Copyright Policy",
			description: `MSTC Limited does not guarantee the availability of such linked pages at all times. This policy outlines the handling 
                      and distribution of copyrighted materials posted on the website. All content shared through this platform must comply 
                      with applicable copyright laws. Any infringement or violation of these laws will lead to penalties, as stipulated by the 
                      governing laws of India.`,
		},
		"content-archival-policy": {
			name: "Content Archival Policy",
			description: `This policy describes how content posted on this platform is archived. Archived content can be accessed in accordance 
                      with the archival protocols defined by MSTC Limited. The content will be stored and maintained for future reference, 
                      while ensuring security and compliance with privacy laws.`,
		},
		"website-security-policy": {
			name: "Website Security Policy",
			description: `Our website security policy outlines the security measures taken by MSTC Limited to ensure data protection. All user 
                      data is encrypted, and we regularly perform audits to detect and mitigate potential security threats.`,
		},
		"website-monitoring-policy": {
			name: "Website Monitoring Policy",
			description: `This policy governs how the MSTC Limited monitors and tracks activities on the website. Monitoring is carried out for 
                      ensuring compliance with terms of use, and for enhancing user experience. Any data captured through monitoring 
                      will not be used for unauthorized purposes.`,
		},
		"content-review-policy": {
			name: "Content Review Policy",
			description: `This policy defines how content published on the website is reviewed. MSTC Limited ensures that all content meets 
                      the standards of quality, legal compliance, and relevance before being published. Content will also be periodically 
                      reviewed to ensure it remains up to date.`,
		},
		"website-contingency-management-policy": {
			name: "Website Contingency Management Policy",
			description: `This policy outlines how MSTC Limited handles unforeseen events that could affect the functionality of the website. 
                      It includes the procedures for maintaining operations during system failures, technical issues, and emergency situations.`,
		},
		"content-contribution-policy": {
			name: "Content Contribution, Moderation & Approval Policy (CMAP)",
			description: `This policy explains how content contributions are handled. Contributions from external entities or users are reviewed 
                      and moderated before being approved for posting. We ensure that the content adheres to the community standards, 
                      privacy laws, and copyright regulations.`,
		},
	};

	// Use effect to update the option data when the policy is selected
	const contactInfo = {
		phone: "+91 123 456 7890",
		email: "contact@mstclimited.com",
		address: "MSTC Limited, Kolkata, India",
	};

	const feedbackForm = (
		<div>
			<h4>Feedback Form</h4>
			<label>Issue Type:</label>
			<select>
				<option>Technical Issue</option>
				<option>Content Issue</option>
				<option>Other</option>
			</select>
			<br />
			<label>Description:</label>
			<textarea rows="4" cols="50"></textarea>
			<br />
			<button>Send</button>
		</div>
	);

	useEffect(() => {
		// Check if the parameter matches a policy or a section
		console.log("Inside use effect");
		if (componentMap[what]) {
			console.log("Required Policy");
			setOptionData(componentMap[what]);
		}
	}, [what]);

	const handleSelectionChange = (selection) => {
		if (componentMap[selection]) {
			setOptionData(componentMap[selection]);
		} else {
			// If no valid what, show page not found message
			setOptionData({
				name: "Page Not Found",
				description: <p>Page not found</p>,
			});
		}
		// You can call other functions here to update the site data based on the selection
		console.log("Selected: ", selection);
	};

	return (
		<div className="w-full h-full flex">
			<div className="w-full h-full flex flex-col items-center">
				<div className="w-2/3 h-full flex flex-row pt-5">
					<div
						className="w-1/4 h-full flex flex-col items-start"
						id="div-id-side-table">
						{/* <!-- About Us Section --> */}
						{/* About Us Section */}
						<h3 className="h5 mb-1">About Us</h3>
						<ul className="w-full h-full p-2 items-center">
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("feedback")}
									className="text-secondary text-decoration-none hover:text-white">
									Feedback
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("disclaimer")}
									className="text-secondary text-decoration-none hover:text-white">
									Disclaimer
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("termsOfUse")}
									className="text-secondary text-decoration-none hover:text-white">
									Terms of Use
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("websiteAccessibility")}
									className="text-secondary text-decoration-none hover:text-white">
									Website Accessibility
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("contactUs")}
									className="text-secondary text-decoration-none hover:text-white">
									Contact Us
								</button>
							</li>
						</ul>

						{/* Policies Section */}
						<h3 className="h5 mb-1">Policies</h3>
						<ul className="w-full h-full p-2 items-center">
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("privacyPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Privacy Policy
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("hyperlinkingPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Hyperlinking Policy
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("copyrightPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Copyright Policy
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("contentArchivalPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Content Archival Policy
								</button>
							</li>
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() => handleSelectionChange("websiteSecurityPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Website Security Policy
								</button>
							</li>
						</ul>

						{/* Additional Policies Section */}
						<h3 className="h5 mb-1">Additional Policies</h3>
						<ul className="w-full h-full p-2 items-center">
							<li className="text-left border-solid border-orange-200 hover:border-orange-400">
								<button
									onClick={() =>
										handleSelectionChange("websiteMonitoringPolicy")
									}
									className="text-secondary text-decoration-none hover:text-white">
									Website Monitoring Policy
								</button>
							</li>
							<li className="text-left">
								<button
									onClick={() => handleSelectionChange("contentReviewPolicy")}
									className="text-secondary text-decoration-none hover:text-white">
									Content Review Policy
								</button>
							</li>
							<li className="text-left">
								<button
									onClick={() =>
										handleSelectionChange("websiteContingencyManagementPlicy")
									}
									className="text-wrap text-left text-secondary text-decoration-none hover:text-white">
									Website Contingency Management Policy
								</button>
							</li>
							<li className="text-left">
								<button
									onClick={() =>
										handleSelectionChange(
											"contentContributionModerationApprovalPolicy"
										)
									}
									className="text-secondary text-left text-decoration-none hover:text-white">
									Content Contribution, Moderation & Approval Policy (CMAP)
								</button>
							</li>
						</ul>

						{/* Display Selected Option (For Debugging/Preview) */}
					</div>

					<div className="w-3/4 h-full flex flex-col">
						{optionData}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PolicyPage;
