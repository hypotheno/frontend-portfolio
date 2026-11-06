import type {
  Exercise,
  ActivityLog,
  Goal,
  WorkoutPlan,
  PlanExercise,
  User,
} from "./types";

export const currentUser: User = {
  user_id: 1,
  full_name: "Niño M. Belen",
  email: "nino@example.com",
  weight_kg: 65,
  height_cm: 170,
  created_at: "2026-11-01",
};

export const exercises: Exercise[] = [
  { exercise_id: 1, exercise_name: "Push-ups", category: "Strength", calories_per_minute: 7, description: "Upper body bodyweight exercise." },
  { exercise_id: 2, exercise_name: "Jogging", category: "Cardio", calories_per_minute: 10, description: "Steady-pace outdoor run." },
  { exercise_id: 3, exercise_name: "Plank", category: "Core", calories_per_minute: 5, description: "Hold a straight-body position." },
  { exercise_id: 4, exercise_name: "Stretching", category: "Flexibility", calories_per_minute: 3, description: "Full-body stretch routine." },
];

export const goals: Goal[] = [
  { goal_id: 1, user_id: 1, goal_type: "Lose weight", target_value: "60 kg", target_date: "2026-12-31", status: "Active" },
  { goal_id: 2, user_id: 1, goal_type: "Workout streak", target_value: "7 days", target_date: "2026-11-15", status: "Completed" },
];

export const plans: WorkoutPlan[] = [
  { plan_id: 1, plan_name: "Desk Warrior Starter", difficulty_level: "Beginner", target_goal: "Reduce sedentary time" },
  { plan_id: 2, plan_name: "Cardio Boost", difficulty_level: "Intermediate", target_goal: "Improve endurance" },
];

export const planExercises: PlanExercise[] = [
  { plan_id: 1, exercise_id: 1, sets: 3, reps: 10 },
  { plan_id: 1, exercise_id: 3, sets: 3, reps: 30 },
  { plan_id: 1, exercise_id: 4, sets: 1, reps: 10 },
  { plan_id: 2, exercise_id: 2, sets: 1, reps: 30 },
  { plan_id: 2, exercise_id: 3, sets: 4, reps: 45 },
];

export const logs: ActivityLog[] = [
  { log_id: 1, user_id: 1, exercise_id: 2, duration_minutes: 30, calories_burned: 300, date_completed: "2026-11-03" },
  { log_id: 2, user_id: 1, exercise_id: 1, duration_minutes: 10, calories_burned: 70, date_completed: "2026-11-04" },
];