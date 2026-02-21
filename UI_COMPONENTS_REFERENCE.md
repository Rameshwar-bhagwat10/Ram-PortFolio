# UI Components Quick Reference

## Import

```typescript
import { 
  Button, 
  Card, 
  Badge, 
  Input, 
  SectionHeading, 
  Divider, 
  GlowWrapper 
} from '@/components/ui';

import Container from '@/components/layout/Container';
```

---

## Button

### Props
```typescript
variant?: 'primary' | 'secondary' | 'ghost'  // default: 'primary'
size?: 'sm' | 'md' | 'lg'                    // default: 'md'
isLoading?: boolean                          // default: false
leftIcon?: React.ReactNode
rightIcon?: React.ReactNode
disabled?: boolean
```

### Examples
```tsx
// Primary button
<Button variant="primary" size="md">Submit</Button>

// Secondary with icon
<Button variant="secondary" leftIcon={<Icon />}>Learn More</Button>

// Loading state
<Button isLoading>Processing...</Button>

// Ghost button
<Button variant="ghost">Cancel</Button>
```

---

## Card

### Props
```typescript
padding?: 'sm' | 'md' | 'lg'  // default: 'md'
hover?: boolean               // default: false
glow?: boolean                // default: false
```

### Examples
```tsx
// Basic card
<Card padding="md">
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Hover effect
<Card hover>
  <p>Hover over me</p>
</Card>

// With glow
<Card glow padding="lg">
  <p>Glowing card</p>
</Card>
```

---

## Badge

### Props
```typescript
variant?: 'primary' | 'outline' | 'subtle'  // default: 'subtle'
```

### Examples
```tsx
// Tech tags
<Badge variant="subtle">React</Badge>
<Badge variant="subtle">TypeScript</Badge>

// Status
<Badge variant="primary">Featured</Badge>

// Outline
<Badge variant="outline">New</Badge>
```

---

## Input

### Props
```typescript
label?: string
error?: string
type?: string
placeholder?: string
value?: string
onChange?: (e) => void
```

### Examples
```tsx
// With label
<Input 
  label="Email" 
  type="email" 
  placeholder="your@email.com"
/>

// With error
<Input 
  label="Password"
  type="password"
  error="Password is required"
/>

// Controlled
<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

---

## SectionHeading

### Props
```typescript
subtitle?: string
title: string              // required
highlightWord?: string
description?: string
```

### Examples
```tsx
// Basic
<SectionHeading title="About Me" />

// With subtitle and description
<SectionHeading
  subtitle="Introduction"
  title="About Me"
  description="Learn more about my journey"
/>

// With highlight
<SectionHeading
  title="My Projects"
  highlightWord="Projects"
/>
```

---

## Divider

### Props
```typescript
gradient?: boolean  // default: false
```

### Examples
```tsx
// Normal divider
<Divider />

// Gradient divider
<Divider gradient />
```

---

## GlowWrapper

### Props
```typescript
intensity?: 'low' | 'medium' | 'high'  // default: 'medium'
```

### Examples
```tsx
// Wrap any component
<GlowWrapper intensity="medium">
  <Card>Content</Card>
</GlowWrapper>

// High intensity
<GlowWrapper intensity="high">
  <div>Hover for strong glow</div>
</GlowWrapper>
```

---

## Container

### Props
```typescript
children: React.ReactNode
className?: string
```

### Examples
```tsx
// Standard container
<Container>
  <h1>Content</h1>
</Container>

// With custom class
<Container className="py-20">
  <section>...</section>
</Container>
```

---

## Common Patterns

### Project Card
```tsx
<GlowWrapper>
  <Card padding="lg" hover>
    <h3 className="text-2xl font-bold mb-2">Project Title</h3>
    <p className="text-muted mb-4">Description</p>
    
    <div className="flex gap-2 mb-6">
      <Badge variant="subtle">React</Badge>
      <Badge variant="subtle">TypeScript</Badge>
    </div>
    
    <div className="flex gap-4">
      <Button variant="primary" size="sm">View</Button>
      <Button variant="secondary" size="sm">Code</Button>
    </div>
  </Card>
</GlowWrapper>
```

### Section Layout
```tsx
<section className="py-20">
  <Container>
    <SectionHeading
      subtitle="What I Do"
      title="My Skills"
      highlightWord="Skills"
      description="Technologies I work with"
    />
    
    <div className="grid md:grid-cols-3 gap-6">
      {/* Content */}
    </div>
  </Container>
</section>
```

### Form
```tsx
<Card padding="lg">
  <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
  
  <div className="space-y-4">
    <Input label="Name" placeholder="Your name" />
    <Input label="Email" type="email" placeholder="your@email.com" />
    <Input label="Message" placeholder="Your message" />
    
    <Button variant="primary" size="lg" className="w-full">
      Send Message
    </Button>
  </div>
</Card>
```

---

## Animation Integration

All components support Framer Motion props:

```tsx
import { motion } from 'framer-motion';

// Animated button
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <Button>Animated</Button>
</motion.div>

// Animated card
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.2 }}
>
  <Card>Content</Card>
</motion.div>
```

---

## Styling Override

All components accept `className` prop:

```tsx
<Button className="w-full mt-4">
  Full Width Button
</Button>

<Card className="max-w-md mx-auto">
  Centered Card
</Card>
```

---

## Accessibility

All components include proper ARIA attributes:

- Buttons: `disabled`, `aria-label`
- Inputs: `aria-invalid`, `aria-describedby`
- Cards: Semantic HTML
- Headings: Proper heading hierarchy

---

## Theme Colors

```css
background: #0F0E0E
card: #171616
primary: #FF8C00
secondary: #FF5F00
muted: #B3B3B3
border: rgba(255, 255, 255, 0.06)
```

Use in Tailwind:
```tsx
className="bg-background text-primary border-border"
```

---

## Best Practices

1. **Use Container for sections**
   ```tsx
   <section>
     <Container>
       {/* content */}
     </Container>
   </section>
   ```

2. **Consistent spacing**
   ```tsx
   <section className="py-20">
     <div className="space-y-8">
       {/* content */}
     </div>
   </section>
   ```

3. **Combine components**
   ```tsx
   <GlowWrapper>
     <Card hover>
       <Badge>Tag</Badge>
       <Button>Action</Button>
     </Card>
   </GlowWrapper>
   ```

4. **Use SectionHeading consistently**
   ```tsx
   <SectionHeading
     subtitle="Section Name"
     title="Main Title"
     highlightWord="Title"
   />
   ```

---

**All components are production-ready and fully typed!**
