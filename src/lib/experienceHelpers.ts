import type { Experience, Job, Project } from '../types';

export const isJob = (experience: Experience): experience is Job => {
  const job = experience as unknown as Job;
  return !!job.company;
};

export const isProject = (experience: Experience): experience is Project => {
  const project = experience as unknown as Project;
  return !!project.link;
};

export const experienceHasSections = (experience: Experience): boolean => {
  return getExperiences(experience).length > 0;
};

export const getExperiences = (experience: Experience): Experience[] => {
  return Array.isArray(experience.sections?.experiences)?experience.sections.experiences:[];
};

export const getCareerStartDate = (experience: Experience[]): string => {
  let date = null;
  if (experience?.length > 0) {
    for (let i = experience.length-1; i>=0 && !date; i--) {
      let e = experience[i];
      if (experienceHasSections(e)) {
        let experiences: Experience[] = getExperiences(e);
        for (let j = experiences.length-1; i>=0 && !date; j--) {
          let f = experiences[j];
          if (isJob(f)) {
            date = f.startDate;
          }
        }
      } else if (isJob(e)) {
        date = e.startDate;
      } 
    }
  }
  const startDate = date ? new Date(`1 ${date}`) : new Date();
  return startDate.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/* Splits an array of experiences into an array of arrays of experiences.
 * each time after a JobExperienceGroup, a new array is created
 */
export const splitExperiences = (experiences: Experience[]): (Experience[]|Experience)[] => {
  const result: (Experience[]|Experience)[] = [];
  let group: Experience[] = [];
  experiences.forEach(experience => {
    if (experienceHasSections(experience)) {
      if (group.length > 0) {
        result.push(group);
        group = [];
      }
      result.push(experience);
    } else {
      group.push(experience);
    }
  });
  if (group.length > 0) {
    result.push(group);
    group = [];
  }
  return result;
};