// GitHubStats.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubStats = () => {
  const [languageStats, setLanguageStats] = useState({});

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const repositories = await fetchRepositories();
        const aggregatedStats = await aggregateLanguageStats(repositories);
        setLanguageStats(aggregatedStats);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGitHubStats();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/JosephLiao542211/repos', {
        headers: {
          Authorization: 'token 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',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const aggregateLanguageStats = async (repositories) => {
    const totalBytesByLanguage = {};
    let totalBytes = 0;

    for (const repo of repositories) {
      const languages = repo.languages_url;

      try {
        const languageResponse = await axios.get(languages, {
          headers: {
            Authorization: 'token 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',
          },
        });

        for (const lang in languageResponse.data) {
          // Include only JavaScript, Python, HTML+CSS (combined), and Java
          const lowercaseLang = lang.toLowerCase();
          if (lowercaseLang === 'javascript' || lowercaseLang === 'python' || lowercaseLang === 'html' || lowercaseLang === 'css' || lowercaseLang === 'java') {
            // For HTML and CSS, combine them into a single category
            const language = lowercaseLang === 'html' || lowercaseLang === 'css' ? 'html/css' : lowercaseLang;

            const bytesInRepo = languageResponse.data[lang];

            // Add bytes to the total for that language
            if (totalBytesByLanguage[language]) {
              totalBytesByLanguage[language] += bytesInRepo;
            } else {
              totalBytesByLanguage[language] = bytesInRepo;
            }

            // Add bytes to the overall total
            totalBytes += bytesInRepo;
          }
        }
      } catch (error) {
        console.error('Error fetching language stats for a repository:', error);
      }
    }

    const aggregatedStats = {};

    // Calculate percentages based on totalBytesByLanguage and totalBytes
    for (const lang in totalBytesByLanguage) {
      const percentage = (totalBytesByLanguage[lang] / totalBytes) * 100;
      aggregatedStats[lang] = percentage;
    }

    return aggregatedStats;
  };

  return (
    <div>
      <h2>GitHub Language Stats</h2>
      <ul>
        {Object.entries(languageStats).map(([language, percentage]) => (
          <li key={language}>
            {language}: {percentage.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubStats;
