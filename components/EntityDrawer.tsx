"use client";

import { Database, KeyRound, Link2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export type Column = {
  name: string;
  type: string;
  note?: string;
  key?: "PK" | "FK";
};

export type Entity = {
  name: string;
  text: string;
  relationship: string;
  columns: Column[];
};

export default function EntityDrawer({ entity }: { entity: Entity }) {
  return (
    <Drawer>
      <DrawerTrigger className="group h-full w-full cursor-pointer rounded-xl border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary">
        <span className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Database className="size-5" />
        </span>
        <span className="block text-base font-semibold">{entity.name}</span>
        <span className="mt-1 block text-sm text-muted-foreground">
          {entity.text}
        </span>
        <span className="mt-3 block text-xs font-medium text-primary">
          Tap to view structure →
        </span>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle className="text-xl">{entity.name}</DrawerTitle>
            <DrawerDescription>{entity.text}</DrawerDescription>
          </DrawerHeader>

          <div className="space-y-4 px-4 pb-2">
            <div className="flex items-start gap-3 rounded-xl border bg-accent/40 p-4 text-sm">
              <Link2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>
                <span className="font-semibold">Relationship: </span>
                {entity.relationship}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Column</th>
                    <th className="px-4 py-2 font-semibold">Type</th>
                    <th className="hidden px-4 py-2 font-semibold sm:table-cell">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {entity.columns.map((c) => (
                    <tr key={c.name} className="border-t">
                      <td className="px-4 py-2 font-mono text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          {c.key && (
                            <span className="inline-flex items-center gap-1 rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground">
                              <KeyRound className="size-3" />
                              {c.key}
                            </span>
                          )}
                          {c.name}
                        </span>
                      </td>
                      <td className="px-4 py-2 font-mono text-xs text-muted-foreground sm:text-sm">
                        {c.type}
                      </td>
                      <td className="hidden px-4 py-2 text-muted-foreground sm:table-cell">
                        {c.note ?? "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Close
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}