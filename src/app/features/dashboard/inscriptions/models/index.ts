import { Course } from '../../courses/models';
import { Subscriber } from '../../subscribers/models';

export interface Inscription {
  id: string;
  subscriberId: string;
  courseId: string;
  student?: Subscriber;
  course?: Course;
}
