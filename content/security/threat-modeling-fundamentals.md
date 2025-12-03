---
title: "Threat Modeling Fundamentals"
draft: false
date: 2022-09-15T00:00:00+08:00
tags:
  - all
---

## Threat Modeling, The What, Why, Who And When

### What Is Threat Modeling

Threat Modeling is a process of systematically listing all potential ways one can attack an application.

* Systematic approach - repeatable and consistent process during the whole development lifecycle
* Looking at attacks - actively looking at what can be abused
* Probable threat scenarios - list of threats

#### Definitions

* Weakness - software defect, bug
* Vulnerability - weakness that can be exploited
* Attack/Incident - target, attack vector, threat actor
* Attack surface - anything that can be obtained, used, or attacked by a threat actor
* Risk = Impact * Likelihood

### Why Should One Perform Threat Modeling

* Pro-active approach - security upfront
* Efficient - the sooner a bug or a vulnerability is discovered in the SDLC, the cheaper it is
* Prioritize bugs - the outcome is the list of potential threats and/or risks of the application, which is used to determine further mitigation strategies that will allow to prioritize the workload
* Better understanding - will give the developers a whole overview of the system

_The ultimate objective of threat modeling is risk reduction._

#### Other methodologies that can perform risk reduction aside from Threat Modeling

* Architectural analysis
* Source code analysis
* Vulnerability scanning
* Penetration testing

_Threat modeling is a collaborative and repeatable process._

### Who Should Perform Threat Modeling

* System Architect - somebody who knows how the system ha been designed and how the data flows across
* Developer - somebody who knows the intricate details on how the application was built and the detailed interactions between components
* Tester - somebody who knows the requirements and what the application is expected to do
* Security Professional - somebody who knows specific attack factors and think like an attacked

_The best way to implement threat modeling is to make as little changes to the process as possible._

### When Should One Perform Threat Modeling

* As early as possible
* Requirements phase
* Design phase

_In general, early on in the process._

## Choosing The Right Approach

### Asset-centric Approach

Also called **Risk-centric Approach.**

1. Create lists of assets
2. Draw assets, components and data flows
3. For each element, check for threats

Examples:

* PASTA - Process for Attack Simulation and Threat Analysis
* TRIKE - dated threat modeling technology with accompanying tool

> If you don't know what to protect, how do you know you're protecting it?

### Attacker-centric Approach

1. Create a list of threat actors
   1. Motive
   2. Means
   3. Opportunity
2. Create a list of threats

### Application-centric Approach

1. Draw a diagram of the application
   * For example a Data Flow Diagram
2. List threats for each elements
   * STRIDE
   * OWASP Top 10
3. Rank threats using classification model

_Choose approach based on skillset._

## Choosing The Right Methodology

### PASTA

_Process for Attack Simulation and Threat Analysis_

1. Define Business Objectives
2. Define Technical Scope
3. Decompose Application
4. Analyze Threats
5. Identify Vulnerabilities
6. Enumerate Attacks
7. Perform Impact Analysis

### Microsoft Threat Modeling

* Threat modeling framework
* Sometimes incorrectly named STRIDE
  * STRIDE is a threat classification system used within the Microsoft threat modeling methodology
* Focuses on technical risk
* Developer-driven
* Application-centric approach

**Steps**: Identify Assets > Create Architecture Overview > Decompose Application > Identify Threats > Document Threats > Rate Threats

### OCTAVE

_Operationally Critical Threat, Asset and Vulnerability Evaluation_

* Risk analysis framework
* Evaluates organization (as opposed to an application)
* Different versions
  * OCTAVE (large companies)
  * OCTAVE-S (less than 100 employees)
  * OCTAVE Allegro (asset-centric approach)
* Focus on security practices

**Process**: Establish Drivers > Profile Assets > Identifying Threats > Mitigate Risks

### TRIKE

* Methodology as well as tool
* High levels of automation are possible
* Asset-centric approach
* Focus on defensive side
* Trageted towards security auditing teams
* Three models
  * Requirements model
  * Implementation model
  * Risk model

**Process**: Identify Threats > Investigate Threats > Identify Mitigations > Investigate Mitigations

### VAST

_Visual Agile Simple Threat Modeling_

* Two threat model types
  * Application Threat Model
  * Operational Threat Model
* Uses process flow diagram
* Targeted towards agile companies
* Scalable

## Notes

* Best methodology depends on team, organization and goal
* Recommendations: Asset-centric: PASTA && Application-centric: Microsoft Threat Modeling

## References

* [Threat Modeling Fundamentals by Peter Mosmans on Pluralsight](https://app.pluralsight.com/library/courses/threat-modeling-fundamentals/table-of-contents)