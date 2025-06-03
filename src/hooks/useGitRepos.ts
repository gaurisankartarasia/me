import { useState, useEffect } from "react";
import { GitHubRepo } from "@/types";

export const useGitHubRepos = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setRepos([]);

    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`
    )
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`GitHub user "${username}" not found.`);
          }
          if (response.status === 403) {
            throw new Error(
              `GitHub API rate limit exceeded. Please try again later.`
            );
          }
          throw new Error(
            `GitHub API error: ${response.status} ${response.statusText}`
          );
        }
        return response.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((fetchError: unknown) => {
        console.error("Error fetching GitHub repositories:", fetchError);
        if (fetchError instanceof Error) {
          setError(fetchError.message);
        } else {
          setError("An unknown error occurred while fetching repositories.");
        }
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
};