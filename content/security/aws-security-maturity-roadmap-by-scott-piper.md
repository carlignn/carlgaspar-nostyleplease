---
title: AWS Security Maturity Roadmap by Scott Piper
subtitle: Write-up from Scott Piper's blog on AWS Security Maturity Roadmap
date: 2023-09-20T16:00:00.000Z
---

Write-up from Scott Piper's blog on AWS Security Maturity Roadmap

## Most common security incidents

1. Publicly accessible resources such as S3 buckets or ElasticSearch clusters.
2. Leaked access keys. For example, access keys posted to GitHub.
3. Compromised IAM Roles through SSRF or RCE against an EC2, resulting in access to the metadata service at 169.254.169.254.

## AWS Security Maturity Roadmap

### Stage 1: Inventory

1. Identify all AWS accounts in the company and their points of contact.
2. Integrate AWS accounts into AWS Organizations.
3. Ensure all account root emails are on distribution lists.
4. Opt-out of AI services using your data.
5. Have an AWS account for Security.
6. Create budget alarms.

> If you don’t already have lots of AWS accounts, recognize that at this point you now have a minimum of 3 AWS accounts (an account that has your business stuff in it, the AWS Organization root account with nothing in it, and the Security account).

### Stage 2: Have backups

1. Create regular backups.

> As you learn what data you have in AWS, you should ensure that data is backed up to a separate AWS account in a separate region from where the data comes from (or possibly even somewhere off of AWS)

### Stage 3: Visibility and initial remediation

1. Turn on CloudTrail, GuardDuty, and Access Analyzer for all accounts to send their logs and alerts to the Security account.
2.  Create an IAM role in every account that grants view access into the account from the Security account.
3.  Run a one-time scanning tool to identify tactical remediations.
4.  Turn on S3 Public Block Access.
5.  Develop an account initialization script and new account creation process.

### Stage 4: Detection

1. Send alerts to a ticketing system.
2. Enable investigations to logs.
3. Perform regular scanning of the accounts for security issues.
4. Document your security guidelines for your company.
5. Consider turning on other logging sources.

> As a first step, most companies will create a CloudWatch Event rule that sends the alerts directly to an SNS that goes to email or Slack messages. They then quickly realize they need to filter this through a Lambda or something with logic in it in order to ignore certain types of alerts. As their alert response processes mature, they also find they need to send these to a ticketing system. This enables them to track metrics, have an audit history, and perform escalations.

You want to ensure you can minimally do the following:

* Receive a notification about a GuardDuty alert from any of your accounts and any region you enabled it in.
* Be able to alert on Access Denied errors from CloudTrail logs, specifically for your production accounts.
* Be able to search through CloudTrail logs to see all of the actions performed by a principal during a time period.

Consider turning on more logging sources, such as the following, plus any others you might be using (full list of known log sources on AWS is [here](https://matthewdf10.medium.com/how-to-enable-logging-on-every-aws-service-in-existence-circa-2021-5b9105b87c9)):

* VPC DNS queries
* VPC Flow Logs (These are not as useful as many assume)
* CloudTrail S3 access and Lambda invokes
* S3 access logs
* Load balancers
* CloudFront

### Stage 5: Secure IAM access

1. Use SSO for access.
2. Remove all IAM users.
3. Remove all unused IAM roles.
4. Reduce the privileges of service roles to necessary services.
5. Implement pre-commit hooks for secret detection.
6. Plan how accounts will be connected.

### Stage 6: Reduce attack surface and mitigate compromises

1. Apply SCPs.
2. Have no publicly facing EC2s or S3 buckets.
3. Enforce IMDSv2 on all EC2s.

SCPs (Service Control Policies) can be used to restrict actions an account can perform. See examples in my post [AWS SCP Best Practices](https://summitroute.com/blog/2020/03/25/aws_scp_best_practices/). You can make exceptions so only a special IAM role, such as that used for Stack Set deployments, can bypass the restrictions. You can apply different SCPs to different accounts and these can ensure that no one, not even the root user, can perform certain actions.

The SCPs to apply should include:

1. Deny root user access.
2. Allow only approved regions.
3. Allow only approved services.
4. Deny ability to create IAM access keys.
5. Require the use of IMDSv2.
6. Deny ability to leave Organization.
7. Deny ability to make a VPC accessible from the Internet that isn’t already for specific accounts.
8. Deny ability to disrupt GuardDuty, Access Analyzer, CloudTrail, S3 Public Block Access, and other security services.
9. Deny ability to disrupt CloudWatch Event collection or other aspects of your monitoring and alerting pipeline.
10. Deny ability to modify important IAM roles, such as one used for Stack Sets, incident response, or vendors performing monitoring.

### Stage 7: Reproducibility and ownership

1. Use Infrastructure as Code.
2. Control AMI (Amazon Machine Images) and package sourcing.
3. Apply tagging strategy

Once you control infrastructure changes through code, you can also use two-person rule deployments, where one person proposes the changes and another signs off in order for the change to be implemented. You can also use tools to scan these proposed changes before they are deployed. Options for doing this are described [here](https://blog.christophetd.fr/shifting-cloud-security-left-scanning-infrastructure-as-code-for-security-issues/).

With more people working in an AWS environment, you can lose track of what resources are associated with which applications or teams. When a problem is found with a resource, you want to be able to quickly identify who the owner is, without looking through the CloudTrail logs. This becomes especially important when a CI/CD system is solely responsible for creating resources, as you become less able to identify the owner. Therefore, you should have a tagging strategy. This can be enforced via SCPs or scanning or monitoring can be used to detect when required tags are not used

### Stage 8: Enhance detection and least privilege refinement

1. Implement real-time monitoring.
2. Implement automated remediation.
3. Refine IAM policies.
4. Deploy honey tokens.

### Stage 9: Secure network communications

1. Move all non-public network resources into private subnets and proxy outbound requests so you can filter and block them.
2. Restrict egress network traffic.

### Stage 10: Incident preparation

1. Limit the blast radius of incidents.
2. Practice responding to incidents.

> Consider breaking up services into pieces so that if one is compromised the blast radius is more limited.

> Ensure there is a separation of duties so the security team can monitor the production accounts without being able to cause incidents there, and those with production access, cannot impact the security team.

> If you are lucky enough to not have any security incidents, you should practice what happens when systems or IAM roles are compromised, either via a planned exercise, or red team engagement. How long does it take you to identify, understand, and react? Use the lessons learned to improve

## References

[AWS Security Maturity Roadmap by Scott Piper](https://summitroute.com/downloads/aws_security_maturity_roadmap-Summit_Route.pdf)