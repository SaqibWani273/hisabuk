import React from 'react';

const steps = [
    {
        title: 'Define Your Activities',
        description: 'Categorize daily actions into essential, important, recommended, or to be avoided.',
    },
    {
        title: 'Track Your Day',
        description: 'Log your actions easily at the end of the day & see your progress at a glance.',
    },
    {
        title: 'Reflect & Improve',
        description: 'Gain insights from the analytical graphs on where you excel & where you can grow.',
    },
];

const HowItWorks = () => (
    <section className="bg-gray-50 py-16">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">How Hisabuk Works</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
                <div key={step.title} className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default HowItWorks;
