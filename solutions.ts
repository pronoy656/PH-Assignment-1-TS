const multiplyValue = (value: number, multiplier?: number): number => {

  const actualMultiplier = multiplier ?? 2;

  return value * actualMultiplier;
};



const processInput = (value: string | number | boolean): string | number => {

  if (typeof value === "string") {

    return value.trim().toLowerCase();

  } else if (typeof value === "number") {

    return value * 10;

  } else {
    return value ? "Active" : "Inactive";
  }
};




const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};




interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
};