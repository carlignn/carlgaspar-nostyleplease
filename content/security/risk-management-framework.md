---
title: Risk Management Framework
subtitle: From My Write-up of FedVTE’s Fundamentals of Cyber Risk Management
date: 2023-09-27T16:00:00.000Z
toc: true
tags:
  - security
  - write-up
description: >-
  Includes Risk Management Frameworks from NIST SP 800-30, 39, and 37, Octave,
  and CERT Resilience Management Model
---

## Standards for Risk Management

### NIST SP 800-30

* Risk Management Guide for Information Technology Systems
  * Provides a foundation for the development of an effective risk management program
  * Contains the definitions and the practical guidance for assessing and mitigating risks
  * Provides information on the selection of cost-effective security controls

#### NIST SP 800-30: Risk Management

* At a high level, risk management encompasses three processes.
  * \> [Evaluation and Assessment](https://carlgaspar.com/posts/risk-management-framework/#evaluation-and-assessment) > [Risk Assessment](https://carlgaspar.com/posts/risk-management-framework/#step-1-system-characterization) > [Risk Mitigation](https://carlgaspar.com/posts/risk-management-framework/#risk-mitigation--steps-1-and-2) >

![](</img/NIST SP 800-30 Risk Management.png>)

#### Risk Assessment Steps Abstracted from SP 800-30

* Step 1: System Characterization
* Step 2: Threat Identification
* Step 3: Vulnerability Identification
* Step 4: Control Analysis
* Step 5: Likelihood Determination
* Step 6: Impact Analysis
* Step 7: Risk Determination
* Step 8: Control Recommendations
* Step 9: Results Documentation

#### Step 1: System Characterization

* Input
  * Hardware
  * Software
  * System Interfaces
  * Data and Information (Need to categorize how sensitive are these data)
  * People
  * System Mission
* Output
  * System Boundary
  * System Functions
  * System and Data Criticality
  * System and Data Sensitivity

#### Step 2: Threat Identification

* Input
  * History of system attack
  * Data from intelligence agencies, mass media, or gov CERT
* Output
  * Threat Statement

#### Step 3: Vulnerability Identification

* Input
  * Reports from prior risk assessments
  * Prior audits
  * Security requirements
  * Security test results
* Output
  * List of potential vulnerabilities

#### Step 4: Control Analysis

* Input
  * Current controls
  * Planned controls
* Output
  * List of current and planned controls

#### Step 5: Likelihood Determination

* Input
  * Threat-source motivation
  * Threat capacity
  * Nature of vulnerability
  * Current controls
* Output
  * Likelihood rating

##### Likelihood Rating Qualitative Ratings

* High - The threat-source is highly motivated and sufficiently capable, and controls to prevent the vulnerability from being exercised are ineffective.
* Medium - The threat-source is motivated and capable, but controls are in place that may impede successful exercise of the vulnerability.
* Low - The threat-source lacks motivation or capability, or controls are in place to prevent, or at least significantly impede, the vulnerability from being exercised.

##### Another Way to Think About Likelihood Ratings Quantitative and Functional Risk Appetite Statement

* Executive Attention - Risk is between 75 - 99% likely to occur. Alternatively, this risk has come to fruition within the industry within the past year.
* Management Attention - Risk is between 30 - 74% likely to occur. Alternatively, this risk has come to fruition within the industry within the past two years.
* Front Line Attention - This risk is between 1 - 29% likely to occur. Alternatively, the risk has come to fruition within the industry within the past 5 years.

#### Step 6: Impact Analysis

* Input
  * Mission impact analysis
  * Asset criticality assessment
  * Data criticality
  * Data sensitivity
* Output
  * Impact rating

##### Impact Rating Qualitative Ratings

* High
  * May result in high costly loss of major tangible assets or resources
  * May significantly violate, harm, or impede an organization’s mission, reputation, or interest
  * May result in human death or serious injury
* Medium
  * May result in costly loss of tangible assets or resources
  * May violate, harm, or impede an organization’s mission, reputation, or interest
  * May result in human injury
* Low
  * May result in loss of some tangible assets or resources
  * May noticeably affect an organization’s mission, reputation, or interest

##### Another Way to Think About Impact Ratings Quantitative and Functional Risk Appetite Statement

![](</img/Another Way to Think About Impact Ratings Quantitative and Functional Risk.png>)

#### Step 7: Risk Determination

* Input
  * Likelihood of threat exploitation
  * Magnitude of impact
  * Adequacy of planned or current controls
* Output
  * Risks and risk levels
  * The final determination of risk is derived by multiplying the ratings assigned for threat likelihood (e.g., probability) and threat impact.

#### Step 8: Control Recommendations

* To minimize identified risks, consider the following factors when recommending control solutions
  * Effectiveness of options
  * Legal/regulatory
  * Organizational policy
  * Impact to operations
  * Safety/reliability

#### Step 9: Results Documentation

* Risk assessment reports may include
  * Threat-sources
  * Vulnerabilities identified
  * Risks assessed
  * Recommended controls provided

#### Risk Mitigation – Steps 1 and 2

* Step 1: Prioritize Actions
  * Based on risk levels presented in the risk assessment report, implementation actions are prioritized.
  * Top priority should be given to highest risk.
* Step 2: Evaluate Recommended Control Options
  * Feasibility (e.g., compatibility, user acceptance) and effectiveness (e.g., degree of protection and level of risk mitigation) of the recommended control options are analyzed.
  * Objective is to select the most appropriate control option for minimizing risk.

#### Risk Mitigation – Steps 3, 4, and 5

* Step 3: Conduct Cost-Benefit Analysis
  * If the cost of controls exceed the benefit, the organization may choose to accept the risk instead.
  * Usually a trade-off between security and business operations.
* Step 4: Select Controls
  * On the basis of the results of the cost-benefit analysis, management determines the most cost-effective control(s) for reducing risk to the organization’s mission.
* Step 5: Assign Responsibility
  * Appropriate persons (in-house personnel or external contracting staff) who have the appropriate expertise and skill-sets to implement the selected controls are identified and responsibility is assigned.

#### Risk Mitigation – Steps 6 and 7

* Step 6: Develop a Safeguard Implementation Plan
  * The plan should, at a minimum, contain the following information.
    * Risks (vulnerability/threat pairs) and associated risk levels (output from risk assessment report)
    * Recommended controls (output from risk assessment report)
    * Prioritized actions (with priority given to Very High and High risk)
    * Selected planned controls (determined on the basis of feasibility, effectiveness, benefits to the organization, and cost)
    * Required resources for implementing the selected planned controls
    * Lists of responsible teams and staff
    * Start date for implementation
    * Target completion date for implementation
    * Maintenance requirements
* Step 7: Implement Selected Control(s)

#### Evaluation and Assessment

* As business operations or technologies change, periodic reviews must be conducted to
  * Analyze changes
  * Account for new threats and vulnerabilities created by changes
  * Determine effectiveness of existing controls
* Continuous evaluation and assessment of risks is an important component of the risk management life cycle.
* The result/status needs to be documented and reported to senior

### NIST SP 800-39

* Managing Risk from Information Systems
  * Provides guidelines for managing risk to organizational operations and assets
  * Provides a structured yet flexible approach for managing risk
  * A flagship document in the series of FISMA-related publications

#### NIST SP 800-39: Tiers of Risk Management

* Risk management can be viewed as a holistic activity fully integrated into every aspect of the organization.
  1. The organization level
  2. The mission and business process level
  3. The information system level

#### NIST SP 800-39: Process Applied

#### ![](</img//NIST SP 800-39 Process Applied.png>)NIST SP 800-39: Risk Framing

* Establishes the context and provides a common perspective on how organizations manage risk
* Produces a risk management strategy that addresses how organizations intend to
  * Assess risk
  * Respond to risk, and
  * Monitor risk
* The risk management strategy makes explicit the specific assumptions, constraints, risk tolerances, and priorities/trade-offs used within organizations for making investment and operational decisions.

#### NIST SP 800-39: Risk Monitoring

* Provides organizations with the means to
  * Verify compliance
  * Determine the ongoing effectiveness of risk response measures
  * Identify risk-impacting changes to organizational information systems and environments of operation
* Analyzing monitoring results provides organizations the capability to
  * Maintain awareness of the risk being incurred
  * Highlight the need to revisit other steps in the risk management process
  * Initiate process improvement activities as needed

#### NIST SP 800-39: Risk Response

* When organizations experience a breach/compromise to their information systems or environments of operation requiring an immediate response to address the incident and reduce additional risk resulting from the event
* The risk response step can receive inputs from the risk framing step.
  * When the organization is required to deploy new safeguards and countermeasures in their information systems based on security requirements in new legislation or OMB policies
  * Shapes the resource constraints associated with selecting an appropriate course of action
* The risk response step can receive inputs from the risk monitoring step.

### NIST SP 800-37

* Guide for Applying the Risk Management Framework to Federal Information Systems: A Security Life Cycle Approach
* Guidelines developed to ensure that
  * Managing information system security risks is consistent with the organization’s objectives and overall risk strategy
  * Information security requirements are integrated into the organization’s enterprise architecture and SDLC

## Risk Management Framework

## ![](</img//Risk Management Framework.png>)OCTAVE ® (Operationally Critical Threat, Asset, and Vulnerability Evaluation)

### OCTAVE

* Risk-based strategic assessment
* Operationally Critical Threat Asset and Vulnerability Evaluation
* Self-directed
  * Small internal teams draw on knowledge for analysis
* Flexible
  * Adaptable for the majority of operations and organizations
* Focused on organizational risk
  * Balance of organizational strategy, security practices, and technology

#### OCTAVE – Overview

* Three Phases
  1. Build Asset-Based Threat Profiles - For critical assets, what are the threats?
  2. Identify Infrastructure Vulnerabilities - For the assets, evaluate to find vulnerabilities.
  3. Develop Security Strategy and Plans - Risk analysis and mitigation

#### OCTAVE − Phase 1

* Build Asset-Based Threat Profiles
  * Process 1: Identify Senior Management Knowledge
    * Collect information about important assets, security requirements, threats, and current organizational strengths and vulnerabilities from a representative set of senior managers.
  * Process 2: Identify Operational Area Knowledge
    * Collect information about important assets, security requirements, threats, and current organizational strengths and vulnerabilities from managers of selected operational areas.
  * Process 3: Identify Staff Knowledge
    * Collect information about important assets, security requirements, threats, and current organizational strengths and vulnerabilities from general staff and IT staff members of the selected operational areas.
  * Process 4: Create Threat Profiles
    * Select three to five critical information-related assets and define the threat profiles for those assets.

#### OCTAVE − Phase 2

* Identify Infrastructure Vulnerabilities
  * Process 5: Identify Key Components
    * Identify a representative set of key components from the systems that support or process the critical information-related assets, and define an approach for evaluating them.
  * Process 6: Evaluate Selected Components
    * Run tools to evaluate the selected components, and analyze the results to refine the threat profiles for the critical assets.

#### OCTAVE − Phase 3

* Develop Security Strategy and Plans
  * Process 7: Conduct Risk Analysis
    * Define an organizational set of impact evaluation criteria to establish the impact value.
  * Process 8: Develop Protection Strategy
    * Develop an organization-wide protection strategy to improve the organization’s security practices.

### OCTAVE Allegro

* Streamlined version of OCTAVE®

#### OCTAVE Allegro – Step 1

* Establish Risk Measurement Criteria
  * Activity 1 - Define a qualitative set of measures (risk measurement criteria) to evaluate a risk’s effect on your organization’s mission and business objectives.
  * Activity 2 Prioritize the impact areas from most important to least important.

#### OCTAVE Allegro – Step 2

* Develop an Information Asset Profile
  * Activity 1 - Identify a collection of information assets on which an assessment might be performed.
  * Activity 2 - Select those assets that are critical to accomplishing goals and achieving the organization’s mission, as well as those that are important because of such factors as regulatory compliance.
  * Activity 3 - Gather information about your information asset that is necessary to begin the structured risk assessment process.
  * Activity 4 - Document your rationale for selecting the critical information asset.
  * Activity 5 - Record a description for the critical information asset.
  * Activity 6 - Identify and document the owners of the critical information asset.
  * Activity 7 - Determine the security requirements for confidentiality, integrity, and availability.
  * Activity 8 - Identify the most important security requirement for the information asset.

#### OCTAVE Allegro – Steps 3 and 4

* Step 3 – Identify Information Asset Containers
  * Activity 1 - Identify and document the containers in which your information asset is stored, transported, or processed as follows
    * Technical containers under the direct control of the organization (internal) or those managed outside of the organization (external)
    * Physical locations where the information asset may exist either inside or outside of the organization
    * People internal or external to the organization who may have a detailed knowledge of the information asset
* Step 4 – Identify Areas of Concern
  * Activity 1 - Identify areas of concern.

#### OCTAVE Allegro – Steps 5 and 6

* Step 5 – Identify Threat Scenarios
  * Activity 1 - Identify additional threat scenarios not covered by areas of concern.
  * Activity 2 - Identify information assets at risk for each of the generic threat scenarios identified for consideration.
* Step 6 – Identify Risks
  * Activity 1 - Determine how the threat scenarios recorded could impact your organization.

#### OCTAVE Allegro – Steps 7 and 8

* Step 7 – Analyze Risks
  * Activity 1 - Evaluate the consequence relative to each of the impact areas and score as “high,” “medium,” or “low”.
  * Activity 2 - Give impact score based on impact area ranking and impact value.
* Step 8 – Select Mitigation Approach
  * Activity 1 - Sort each of the risks identified by their risk score.
  * Activity 2 - Assign a mitigation approach to each of the risks (mitigate, defer, accept, etc.).
  * Activity 3 - Develop a mitigation strategy for all of the risk profiles determined to be mitigated.

### Updating OCTAVE Allegro to OCTAVE FORTE

![](</img//Updating OCTAVE Allegro to OCTAVE FORTE.png>)

## References

* [Cyber Risk Management Fundamentals](https://carlgaspar.com/posts/cyber-risk-management-fundamentals/)