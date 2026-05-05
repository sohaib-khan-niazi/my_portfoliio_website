export const profile = {
  name: 'Muhammad Sohaib Khan Niazi',
  shortName: 'Sohaib',
  role: 'DevOps & Cloud Infrastructure Engineer',
  location: 'Lahore, Pakistan',
  phone: '+923056927910',
  email: 'sohaibkhanniazi1997@gmail.com',
  linkedinLabel: 'Sohaib Khan Niazi',
  linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Sohaib%20Khan%20Niazi',
  githubUrl: 'https://github.com/sohaib-niazi',
  cvUrl: 'Muhammad_Sohaib_CV.pdf',
  summary:
    'DevOps and cloud infrastructure engineer with 2+ years of hands-on experience across OpenShift, Kubernetes, multi-cloud infrastructure, GitOps delivery, and enterprise observability.',
};

export const heroHighlights = [
  'OpenShift private cloud platforms',
  'AWS infrastructure and cost optimization',
  'Splunk observability and production operations',
  'GitOps CI/CD for developer teams',
];

export const impactStats = [
  { value: '2+', label: 'Years building cloud platforms' },
  { value: '3', label: 'Major cloud providers' },
];

export const skills = [
  {
    title: 'Kubernetes & OpenShift',
    eyebrow: 'Platform',
    skills: ['OpenShift IPI/UPI', 'OKD', 'EKS', 'AKS', 'GKE', 'RBAC', 'OVN-Kubernetes', 'Day-2 operations'],
  },
  {
    title: 'Cloud Platforms',
    eyebrow: 'Cloud',
    skills: ['AWS EKS', 'ECS', 'EC2', 'VPC', 'Lambda', 'RDS', 'Bedrock', 'S3', 'Route 53', 'IAM', 'SQS', 'ECR'],
  },
  {
    title: 'Private Cloud & Storage',
    eyebrow: 'Infra',
    skills: ['OpenShift private cloud', 'Ceph Storage', 'LVM', 'StorageClasses', 'Persistent volumes'],
  },
  {
    title: 'Observability',
    eyebrow: 'Reliability',
    skills: ['Splunk Enterprise', 'Splunk o11y Cloud', 'Grafana', 'Prometheus', 'CloudWatch', 'Dashboards', 'Alerts'],
  },
  {
    title: 'CI/CD & GitOps',
    eyebrow: 'Delivery',
    skills: ['ArgoCD', 'GitHub Actions', 'Bitbucket Pipelines', 'Progressive delivery', 'Rollback strategies'],
  },
  {
    title: 'Systems & Security',
    eyebrow: 'Ops',
    skills: ['Terraform', 'Bash', 'Docker', 'Podman', 'Linux', 'Nginx', 'Apache', 'TLS/SSL', 'IAM', 'Ingress/Egress'],
  },
];

export const experiences = [
  {
    role: 'DevOps & Cloud Infrastructure Engineer',
    company: 'Onstak',
    period: 'November 2025 - Present',
    summary:
      'Architecting a production private cloud platform on OpenShift, with cluster provisioning, AI/ML enablement, storage architecture, and production observability.',
    points: [
      'Provisioned OpenShift clusters using IPI and UPI patterns across multiple environments.',
      'Designed persistent storage strategies with Ceph, LVM, StorageClasses, and persistent volumes for stateful workloads.',
      'Enabled AI workload environments with GPU operators, Node Feature Discovery, and model-serving operators.',
      'Built Splunk Enterprise and Splunk Observability Cloud dashboards, alerts, and log pipelines for production systems.',
      'Managed AWS services including EKS, ECS, EC2, VPC, Lambda, RDS, Bedrock, S3, Route 53, IAM, SQS, and ECR.',
      'Maintained GitOps-driven CI/CD with ArgoCD, GitHub Actions, and Bitbucket Pipelines.',
    ],
    tags: ['OpenShift', 'Kubernetes', 'AWS', 'Ceph', 'Splunk', 'ArgoCD'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Maqware Solutions, Lahore',
    period: 'February 2024 - October 2025',
    summary:
      'Managed staging and production cloud infrastructure for application teams, with strong focus on AWS design, automation, CI/CD, and cost control.',
    points: [
      'Supported cloud infrastructure for 25+ developers across Linux staging and production environments.',
      'Designed AWS environments for MERN, PHP/Laravel, and Django teams with automated delivery pipelines.',
      'Reduced AWS spend through right-sizing, reserved instance planning, and cost estimation frameworks.',
      'Implemented Dockerized project environments and introduced Kubernetes orchestration for scalable services.',
      'Managed DNS, Route 53, hosting, IAM least privilege, and VPC security practices.',
    ],
    tags: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Route 53', 'CI/CD'],
  },
];

export const projects = [
  {
    title: 'OpenShift Private Cloud Platform',
    description:
      'Production platform layer on top of OpenShift for self-service infrastructure, persistent workloads, RBAC, networking, storage classes, and day-2 operations.',
    tags: ['OpenShift', 'IPI/UPI', 'Ceph', 'RBAC'],
  },
  {
    title: 'AI/ML Workload Enablement',
    description:
      'GPU-ready OpenShift environments with GPU operators, Node Feature Discovery, and model-serving operators to support LLM and ML pipelines.',
    tags: ['GPU Operators', 'NFD', 'Model Serving', 'LLM Ops'],
  },
  {
    title: 'Enterprise Observability Stack',
    description:
      'Splunk Enterprise and Splunk o11y Cloud implementation with production dashboards, alerting, logs, and operational signal pipelines.',
    tags: ['Splunk', 'o11y', 'Dashboards', 'Alerts'],
  },
  {
    title: 'AWS Application Landing Zones',
    description:
      'Repeatable AWS environments for MERN, Laravel, and Django teams, covering network design, IAM, managed databases, deployment paths, and cost controls.',
    tags: ['AWS', 'VPC', 'RDS', 'IAM'],
  },
];

export const certifications = [
  {
    issuer: 'AWS',
    title: 'AWS Certified Solutions Architect - Associate',
    image: 'aws-certified-solutions-architect-associate.png',
  },
  {
    issuer: 'HashiCorp',
    title: 'HashiCorp Certified: Terraform Associate',
    image: 'hashicorp-certified-terraform-associate-004.png',
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  school: 'Ondokuz Mayis University, Turkiye',
  year: 'Graduated 2023',
};

export const languages = ['English', 'Turkish', 'Urdu'];
