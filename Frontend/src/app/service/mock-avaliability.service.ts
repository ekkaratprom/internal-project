import { UserResponse } from './../avaliable-time/shared/availiability-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockAvaliabilityService {
  avaliabilityMock: UserResponse[] = [{
    userId: 1,
    fullName: 'Ekkarat P.',
    position: 'Junior Frontend Developer',
    skills: [
      { skillName: 'Angular' },
      { skillName: 'Bootstrap' },
      { skillName: 'Material Angular' },
      { skillName: 'CSS' },
      { skillName: 'HTML' },
    ],
    cards: [
      {
        totalActualTime: 8,
        cardDate: '2020-10-20T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug form',
          actualTime: 4,
          cardId: 1,
          createDate: '2020-10-20T05:36:51.271Z'
        },
        {
          cardName: 'Fix bug',
          actualTime: 1,
          cardId: 2,
          createDate: '2020-10-20T05:36:51.271Z',
        },
        {
          cardName: 'Fix bug',
          actualTime: 1,
          cardId: 3,
          createDate: '2020-10-20T05:36:51.271Z',
        },
        {
          cardName: 'Fix bug',
          actualTime: 2,
          cardId: 3,
          createDate: '2020-10-20T05:36:51.271Z',
        }

        ]

      }
    ]
  },
  {
    userId: 2,
    fullName: 'Kerati K',
    position: 'Junior Frontend Developer',
    skills: [
      { skillName: 'Angular' },
      { skillName: 'Bootstrap' },
      { skillName: 'Material Angular' },
      { skillName: 'CSS' },
      { skillName: 'HTML' },
    ],
    cards: [
      {
        totalActualTime: 5,
        cardDate: '2020-10-20T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug form',
          actualTime: 4,
          cardId: 1,
          createDate: '2020-10-20T05:36:51.271Z'
        },
        {
          cardName: 'Fix bug',
          actualTime: 1,
          cardId: 2,
          createDate: '2020-10-20T05:36:51.271Z',
        },

        ]

      }
    ]
  },
  {
    userId: 3,
    fullName: 'Krittinon P.',
    position: 'Junior Backend Developer',
    skills: [
      { skillName: 'Node.js' },
      { skillName: 'Java' },
    ],
    cards: [
      {
        totalActualTime: 6,
        cardDate: '2020-10-20T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug',
          actualTime: 4,
          cardId: 1,
          createDate: '2020-10-20T05:36:51.271Z'
        },
        {
          cardName: 'Fix bug',
          actualTime: 1,
          cardId: 2,
          createDate: '2020-10-20T05:36:51.271Z',
        },
        {
          cardName: 'Fix bug',
          actualTime: 1,
          cardId: 3,
          createDate: '2020-10-20T05:36:51.271Z',
        },
        ]
      },
      {
        totalActualTime: 8,
        cardDate: '2020-10-21T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug',
          actualTime: 4,
          cardId: 1,
          createDate: '2020-10-21T05:36:51.271Z'
        },
        {
          cardName: 'Fix bug',
          actualTime: 2,
          cardId: 2,
          createDate: '2020-10-21T05:36:51.271Z',
        },
        {
          cardName: 'Fix bug',
          actualTime: 2,
          cardId: 3,
          createDate: '2020-10-21T05:36:51.271Z',
        },
        ]
      },
      {
        totalActualTime: 8,
        cardDate: '2020-10-23T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug',
          actualTime: 4,
          cardId: 1,
          createDate: '2020-10-23T05:36:51.271Z'
        },
        {
          cardName: 'Fix bug',
          actualTime: 2,
          cardId: 2,
          createDate: '2020-10-23T05:36:51.271Z',
        },
        {
          cardName: 'Fix bug',
          actualTime: 2,
          cardId: 3,
          createDate: '2020-10-23T05:36:51.271Z',
        },
        ]
      },
      {
        totalActualTime: 8,
        cardDate: '2020-10-21T05:36:51.271Z',
        card: [{
          cardName: 'Fix bug',
          actualTime: 8,
          cardId: 1,
          createDate: '2020-10-21T05:36:51.271Z'
        },
        ]
      }
    ]
  }


  ];

  constructor(private http: HttpClient) { }

  getUserAvailiability(): UserResponse[] {
    return this.avaliabilityMock;

  }


}
