export type User = {
  user_id: number;
  full_name: string;
  email: string;
  weight_kg: number | null;
  height_cm: number | null;
  created_at: string;
};

export type Goal = {
  goal_id: number;
  user_id: number;
  goal_type: string;
  target_value: string | null;
  target_date: string | null;
  status: "Active" | "Completed" | "Cancelled";
};

export type Exercise = {
  exercise_id: number;
  exercise_name: string;
  category: string;
  calories_per_minute: number;
  description: string | null;
};

export type WorkoutPlan = {
  plan_id: number;
  plan_name: string;
  difficulty_level: "Beginner" | "Intermediate" | "Advanced";
  target_goal: string | null;
};

export type PlanExercise = {
  plan_id: number;
  exercise_id: number;
  sets: number;
  reps: number;
};

export type ActivityLog = {
  log_id: number;
  user_id: number;
  exercise_id: number;
  duration_minutes: number;
  calories_burned: number | null;
  date_completed: string;
};