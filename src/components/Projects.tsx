import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Bionic Arm',
    description: "A bionic arm functions as a robotic arm which replicates human arm movements through its combination of electronic components and mechanical systems. The device construction utilizes a 3D-printed chassis together with servo motors and an Arduino Uno microcontroller. A joystick controller system controls the arm because it transmits signals to the Arduino which activates the servo motors and manages the arm's joints and gripper operations. The system operates as a standard solution for robotics education purposes and automation research projects and development of assistive technology prototypes.",
    tags: ['ROBOTICS', 'ARDUINO'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Wlv_nLzwL6t3xPjc9FiHHtnoywwyWNvoSa82T5s4qniFwQpM-fdUdsFFIPtURsGpisz712CWZWMGxlqFOcOf7FGb7qj4d-RKGGKwbOWX6pf-gOTeE71eiAbatmSy83U3fKmhmV-zxBMcvD30Z5CZ9vhOQbB90lDoez5sRXyGZIEMmnSRiwknQ8hecCT9SjyEmN2TKkjIgXsZSRP1cNxEe43S4ZZL96wx81DI265I5bQQAjz6G8qeY1coQLR8zu2XgJutWMaPk8s',
  },
  {
    title: 'Mini Arcade',
    description: 'A mini arcade using Raspberry Pi 5 functions as a small gaming system which allows users to experience both traditional arcade games and retro video games from its compact cabinet. The system operates on a Raspberry Pi 5 which functions as its primary computer to run software that enables users to play games from both retro gaming platforms and older arcade systems.',
    tags: ['RASPBERRY PI', 'GAMING'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmbNgNz5RggfPskttlswuyThq90k2wYx6kRFnX7CYbrYvV5tYv-w2a-iTJtcx472m2Z8IFvLRx3kOYdpKhTiiuxVwIpEw6uF4TGxOY1iFbyI3jMavrz4Xhitlf9_j2dRY9vFzaN8gTIw8bw8C1qTRWiMzdNqF9o7DX4Qey2HIo5wcFDUsI6x1KsQitI0BFzM1ZLmNeTtFL4WZEzYOGkXNSjL8FWgOQVKabJFqttGi3zgehbi7c5n8YxVAYhkFXA6n7I0umMICC19s',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-6">PROJECTS.</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured Works</h3>
          </div>
          <a href="#" className="text-[10px] font-bold tracking-[0.3em] hover:text-primary transition-colors mb-2">VIEW ALL.</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video mb-8 overflow-hidden rounded-xl bg-slate-800 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black border border-slate-700 px-2 py-1 rounded tracking-widest text-slate-400 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
