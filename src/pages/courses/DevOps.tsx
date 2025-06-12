import React from "react";

const DevOps = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-4xl font-bold text-center text-gradient">
          DevOps Training Program
        </h1>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Course Overview</h2>
          <p className="text-gray-300">
            This comprehensive DevOps program equips you with the skills to automate infrastructure,
            manage continuous integration/deployment (CI/CD) pipelines, and deploy applications efficiently.
            You will gain expertise in Git, Jenkins, Docker, Kubernetes, cloud (AWS), and monitoring tools.
          </p>
        </section>

        {/* Hands-On Training */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Hands-On Training</h2>
          <p className="text-gray-300">
            You’ll set up real CI/CD pipelines, deploy sample apps using Docker & Kubernetes, 
            monitor services with Prometheus + Grafana, and practice infrastructure-as-code with Terraform.
          </p>
        </section>

        {/* Industry-Level Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Industry-Level Projects</h2>
          <p className="text-gray-300">
            Projects include containerizing a full stack application, auto-scaling on AWS,
            and creating zero-downtime deployments using blue-green or canary strategies.
            These projects are designed to reflect real DevOps challenges in production environments.
          </p>
        </section>

        {/* Job Readiness */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Job Readiness & Placement</h2>
          <p className="text-gray-300">
            This course makes you <strong className="text-white">100% job-ready</strong> with mock interviews,
            GitHub project portfolio, resume preparation, and deployment best practices. We offer
            <span className="text-green-400 font-semibold"> 100% Job Assurance</span> upon successful completion.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DevOps;
