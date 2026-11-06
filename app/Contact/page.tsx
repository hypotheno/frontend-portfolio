"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const info = [
  { label: "Developer", value: "Niño M. Belen" },
  { label: "Email", value: "nbelen@gbox.ncf.edu.ph" },
  { label: "Location", value: "Pamplona, Camarines Sur, Philippines" },
  { label: "Project", value: "RE:BOOT - Wellness & Physical Activity Progress System" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    // TODO: send to backend
    console.log(data);
    setSent(true);
    form.reset();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="max-w-2xl text-muted-foreground">
          Have feedback or questions about RE:BOOT? Send us a message.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Reach the RE:BOOT team</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              {info.map((i) => (
                <div key={i.label}>
                  <dt className="text-sm text-muted-foreground">{i.label}</dt>
                  <dd className="font-medium">{i.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit">Send</Button>
              {sent && (
                <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}