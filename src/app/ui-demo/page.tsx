'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import {
  Button,
  Card,
  Badge,
  Input,
  SectionHeading,
  Divider,
  GlowWrapper,
} from '@/components/ui';

export default function UIDemo() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="space-y-20">
          {/* Section Heading Demo */}
          <section>
            <SectionHeading
              subtitle="UI Components"
              title="Design System Demo"
              highlightWord="System"
              description="A showcase of all reusable UI components built for this portfolio"
            />
          </section>

          <Divider gradient />

          {/* Buttons */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gradient">Buttons</h3>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small Primary
                </Button>
                <Button variant="primary" size="md">
                  Medium Primary
                </Button>
                <Button variant="primary" size="lg">
                  Large Primary
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="md">
                  Secondary
                </Button>
                <Button variant="ghost" size="md">
                  Ghost
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  isLoading={isLoading}
                  onClick={handleLoadingDemo}
                >
                  {isLoading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  leftIcon={<span>👈</span>}
                >
                  With Left Icon
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<span>👉</span>}
                >
                  With Right Icon
                </Button>
              </div>
            </div>
          </section>

          <Divider />

          {/* Cards */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gradient">Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card padding="sm">
                <h4 className="font-bold mb-2">Small Padding</h4>
                <p className="text-muted text-sm">
                  This card has small padding
                </p>
              </Card>

              <Card padding="md" hover>
                <h4 className="font-bold mb-2">Hover Effect</h4>
                <p className="text-muted text-sm">
                  Hover over this card to see the effect
                </p>
              </Card>

              <Card padding="lg" glow>
                <h4 className="font-bold mb-2">With Glow</h4>
                <p className="text-muted text-sm">This card has a glow effect</p>
              </Card>
            </div>
          </section>

          <Divider />

          {/* Badges */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gradient">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">Primary Badge</Badge>
              <Badge variant="outline">Outline Badge</Badge>
              <Badge variant="subtle">Subtle Badge</Badge>
              <Badge variant="subtle">React</Badge>
              <Badge variant="subtle">TypeScript</Badge>
              <Badge variant="subtle">Next.js</Badge>
            </div>
          </section>

          <Divider />

          {/* Inputs */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gradient">Inputs</h3>
            <div className="max-w-md space-y-6">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                error="Password must be at least 8 characters"
              />
            </div>
          </section>

          <Divider />

          {/* Glow Wrapper */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              Glow Wrapper
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <GlowWrapper intensity="low">
                <Card padding="md">
                  <h4 className="font-bold mb-2">Low Intensity</h4>
                  <p className="text-muted text-sm">Hover to see subtle glow</p>
                </Card>
              </GlowWrapper>

              <GlowWrapper intensity="medium">
                <Card padding="md">
                  <h4 className="font-bold mb-2">Medium Intensity</h4>
                  <p className="text-muted text-sm">Hover to see medium glow</p>
                </Card>
              </GlowWrapper>

              <GlowWrapper intensity="high">
                <Card padding="md">
                  <h4 className="font-bold mb-2">High Intensity</h4>
                  <p className="text-muted text-sm">Hover to see strong glow</p>
                </Card>
              </GlowWrapper>
            </div>
          </section>

          <Divider gradient />

          {/* Combined Example */}
          <section>
            <SectionHeading
              title="Combined Example"
              highlightWord="Example"
              description="All components working together"
            />

            <GlowWrapper>
              <Card padding="lg" hover>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Project Title</h3>
                    <p className="text-muted">A beautiful project description</p>
                  </div>
                  <Badge variant="primary">Featured</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="subtle">React</Badge>
                  <Badge variant="subtle">TypeScript</Badge>
                  <Badge variant="subtle">Tailwind</Badge>
                </div>

                <div className="flex gap-4">
                  <Button variant="primary" size="sm">
                    View Project
                  </Button>
                  <Button variant="secondary" size="sm">
                    Source Code
                  </Button>
                </div>
              </Card>
            </GlowWrapper>
          </section>
        </div>
      </Container>
    </div>
  );
}
