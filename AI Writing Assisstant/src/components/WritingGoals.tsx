import React, { useState } from 'react';
import { Target, Check } from 'lucide-react';

interface Goal {
  type: 'words' | 'time';
  target: number;
  current: number;
}

interface WritingGoalsProps {
  wordCount: number;
}

export default function WritingGoals({ wordCount }: WritingGoalsProps) {
  const [goals, setGoals] = useState<Goal[]>([
    { type: 'words', target: 500, current: 0 },
  ]);

  const [showAdd, setShowAdd] = useState(false);
  const [newGoalType, setNewGoalType] = useState<'words' | 'time'>('words');
  const [newGoalTarget, setNewGoalTarget] = useState('');

  const addGoal = () => {
    if (!newGoalTarget) return;
    
    setGoals(prev => [...prev, {
      type: newGoalType,
      target: parseInt(newGoalTarget),
      current: 0
    }]);
    
    setNewGoalTarget('');
    setShowAdd(false);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Target className="mr-2 text-green-500" size={20} />
        Writing Goals
      </h2>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {wordCount >= goal.target ? (
                <Check className="text-green-500" size={20} />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              )}
              <span className="text-gray-700">
                {goal.target} {goal.type}
              </span>
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-300"
                style={{
                  width: `${Math.min((wordCount / goal.target) * 100, 100)}%`
                }}
              />
            </div>
          </div>
        ))}

        {showAdd ? (
          <div className="flex items-center space-x-2">
            <select
              value={newGoalType}
              onChange={(e) => setNewGoalType(e.target.value as 'words' | 'time')}
              className="rounded-md border-gray-300 text-sm"
            >
              <option value="words">Words</option>
              <option value="time">Minutes</option>
            </select>
            <input
              type="number"
              value={newGoalTarget}
              onChange={(e) => setNewGoalTarget(e.target.value)}
              placeholder="Target"
              className="w-24 rounded-md border-gray-300 text-sm"
            />
            <button
              onClick={addGoal}
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
            >
              Add
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAdd(true)}
            className="text-green-500 text-sm hover:text-green-600"
          >
            + Add Goal
          </button>
        )}
      </div>
    </div>
  );
}