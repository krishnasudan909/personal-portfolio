import { GraduationCap, Trophy } from "lucide-react";

const EducationSection = () => {
  const achievements = [
    {
      title: "UBS India Hackathon Winner",
      description:
        "Won the prestigious UBS India Hackathon, demonstrating innovative problem-solving skills and technical excellence in fintech solutions.",
      color: "yellow",
    },
    {
      title: "UBS Certified Engineer",
      description:
        "Achieved UBS Certified Engineer status, validating expertise in enterprise-level software development and engineering practices.",
      color: "blue",
    },
    {
      title: "HackerRank Problem Solving Certified",
      description:
        "Earned certification in Problem Solving from HackerRank, demonstrating strong algorithmic thinking and coding proficiency.",
      color: "green",
    },
  ];

  const getAchievementColorClasses = (color: string) => {
    const colors = {
      yellow: {
        bg: "from-yellow-50 to-orange-100 dark:from-gray-800 dark:to-gray-700",
        border: "border-yellow-500",
      },
      blue: {
        bg: "from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700",
        border: "border-blue-500",
      },
      green: {
        bg: "from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700",
        border: "border-green-500",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor of Information Technology
              </h4>
              <div className="text-primary font-semibold mb-2">
                Vishwakarma Institute of Technology, Pune
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                <span>GPA: 8.84/10</span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span>2019 - 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Focused on software engineering principles, data structures,
                algorithms, and modern web development technologies. Active
                participation in coding competitions and hackathons.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-primary mr-3" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const colorClasses = getAchievementColorClasses(
                  achievement.color
                );
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colorClasses.bg} p-4 rounded-lg border-l-4 ${colorClasses.border}`}
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
