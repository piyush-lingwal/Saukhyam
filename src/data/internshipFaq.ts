export interface InternshipFAQItem {
  id: string;
  question: string;
  answer: string;
}

export const internshipFaqItems: InternshipFAQItem[] = [
  {
    id: 'int-1',
    question: 'Is the internship fully online?',
    answer:
      'The internship is primarily conducted online, allowing interns to work remotely and collaborate digitally. However, interns may occasionally be expected to contribute to Saukhyam programs or initiatives taking place in their city or state. While travel requirements are limited, some involvement in local activities may be part of the experience.',
  },
  {
    id: 'int-2',
    question: 'What is the duration of the internship?',
    answer:
      'The standard internship duration is six months, designed to provide meaningful hands-on learning, professional growth, and deeper engagement with Saukhyam\'s work. Shorter-duration internships may also be available depending on project requirements.',
  },
  {
    id: 'int-3',
    question: 'Is the internship paid?',
    answer:
      'The six-month internship generally includes a stipend after the initial period. The first month is usually unpaid, serving as an orientation and learning phase. Shorter-duration internships are typically unpaid.',
  },
  {
    id: 'int-4',
    question: 'Who can apply for the internship?',
    answer:
      'The six-month internship is generally intended for students currently enrolled in an undergraduate or graduate degree program who are interested in contributing through technology, creativity, research, or social impact initiatives.',
  },
  {
    id: 'int-5',
    question: 'What is the expected time commitment?',
    answer:
      'Interns are expected to contribute approximately 40 to 50 hours per month. This flexible structure allows students to balance academic responsibilities while gaining meaningful practical experience.',
  },
  {
    id: 'int-6',
    question: 'Will interns receive a certificate?',
    answer:
      'Yes. Interns who successfully complete their internship receive an official internship certificate from Saukhyam in recognition of their contribution and learning experience.',
  },
];
