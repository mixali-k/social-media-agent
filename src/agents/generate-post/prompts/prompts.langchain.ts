export const BUSINESS_CONTEXT = `
Here is some context about Atlas Fire and our services:
<business-context>
- **Atlas Fire** is a London-based PASSIVE FIRE PROTECTION specialist. We are FIRAS certified.
- We do NOT provide active fire protection (alarms, sprinklers, extinguishers).
- Our core services include:
  - Fire door inspections and remediation
  - Fire stopping and compartmentation
  - Penetration seals (service penetrations through fire-rated walls/floors)
  - Intumescent products and applications
  - Fire risk assessments (focused on passive measures)
  - Compartmentation surveys
- Industry context: Post-Grenfell Tower tragedy regulations, Building Safety Act 2022 compliance, Fire Safety (England) Regulations 2022, BS 8214 (fire door maintenance)
- Our target audience: Building managers, facilities managers, housing associations, local authorities, property developers, architects
</business-context>`;

export const CONTENT_VALIDATION_PROMPT = `This content will be used to generate engaging, informative and educational social media posts for Atlas Fire.
The following are rules to follow when determining whether or not to approve content as valid, or not:
<validation-rules>
- The content should be related to fire safety, building safety, or passive fire protection.
- Approve content about: fire doors, compartmentation, fire stopping, penetration seals, intumescent products, fire risk assessments, Building Safety Act, Grenfell-related regulations, BS 8214, fire safety training, responsible person duties.
- Approve industry news about fire safety regulations, HSE guidance, building safety legislation, and fire safety standards.
- Approve educational content about fire safety best practices, compliance requirements, and building safety.
- Do NOT approve content that is off-topic (unrelated to fire safety or building safety).
- Do NOT approve content that promotes competitors or disparages the industry.
- Content from government sources (gov.uk, HSE) about fire regulations should be approved.
- Content from industry bodies (FPA, ASFP, IFC) should be approved.
- Construction industry news that relates to fire safety should be approved.
</validation-rules>`;

export const TWEET_EXAMPLES = `<example index="1">
Major Fire Safety Framework Win 🔥

33 firms secure places on the £300m SEC fire safety framework

This demonstrates the growing investment in fire safety compliance following the Building Safety Act

Read more: https://example.com/article
</example>

<example index="2">
Fire Door Inspection Reminder 🚪

Under the Fire Safety (England) Regulations 2022, responsible persons must ensure fire doors in communal areas are checked quarterly

Key checkpoints:
- Intumescent strips intact
- Self-closer functioning
- Gaps within tolerance
- No damage to leaf or frame

Contact us for professional fire door surveys.
</example>

<example index="3">
Building Safety Act Update 📋

Important deadline approaching for higher-risk buildings

Building owners must now register with the Building Safety Regulator

This affects residential buildings 18m+ with at least 2 residential units

Ensure your passive fire protection is documented and compliant.
</example>

<example index="4">
Compartmentation: Why It Matters 🏢

Compartmentation divides buildings into fire-resistant sections, containing fire spread and protecting escape routes

Common issues we find:
- Unsealed service penetrations
- Missing fire stopping
- Damaged fire doors

A compartmentation survey identifies these risks before they become emergencies.
</example>

<example index="5">
FIRAS Certification Explained ✅

When choosing a passive fire protection contractor, look for FIRAS certification

FIRAS-certified contractors are independently audited to ensure installations meet manufacturer specifications and British Standards

This third-party verification protects building owners and occupants.
</example>`;

export const POST_STRUCTURE_INSTRUCTIONS = `The post should have three main sections, outlined below:
<structure-instructions>

<section key="1">
The first part of the post is the header. It should be a short, attention-grabbing headline about the content, followed by one to two relevant emojis. Keep it concise and professional. Example format: "Fire Door Compliance Update 🚪" or "Building Safety Act News 📋"
</section>

<section key="2">
This section will contain the main content of the post. The post body should contain a concise, high-level overview of the content outlined in the marketing report.
It should focus on what the content covers, why it matters for fire safety or building compliance, and what the key takeaways are.
Ensure this is short, no more than 3 sentences. Optionally, if the content is technical, you may include bullet points covering the main points.
Remember to position Atlas Fire as a knowledgeable, helpful resource in the fire safety industry.
</section>

<section key="3">
The final section of the post should contain a call to action. This could be encouraging readers to read the full article, contact Atlas Fire for more information, or consider their own fire safety compliance. Optionally, you can include an emoji here.
</section>

</structure-instructions>`;

export const POST_CONTENT_RULES = `- Focus your post on what the content covers, why it matters for fire safety, and key takeaways for building managers and property owners.
- Keep posts accessible - avoid overly technical jargon, but maintain professional credibility.
- Keep posts short, concise and engaging.
- Limit the use of emojis to the post header, and optionally in the call to action.
- NEVER use hashtags in the post.
- ALWAYS use present tense to make announcements feel immediate.
- ALWAYS include the link to the content being promoted.
- Position Atlas Fire as a knowledgeable, helpful resource - not salesy.
- When relevant, mention how the topic relates to passive fire protection services like fire doors, compartmentation, or fire stopping.`;
