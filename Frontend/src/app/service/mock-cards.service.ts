import { CardList } from './../assignment-list/shared/assignment-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockCardsService {
  cardListFakeResponse: CardList[] = [
    {
      assignmentName: 'string',
      billableTime: 0,
      estimateTime: 0,
      completedStatus: true,
      totalActualTime: 32,
      cardObj: [
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:40.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:45.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:45.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:45.000+00:00'
        },
        {
          cardName: 'Test',
          cardActualTime: 3,
          cardDate: '2020-10-15T08:21:55.000+00:00'
        },
        {
          cardName: 'Test',
          cardActualTime: 3,
          cardDate: '2020-10-15T08:21:56.000+00:00'
        },
        {
          cardName: 'Test',
          cardActualTime: 3,
          cardDate: '2020-10-15T08:21:57.000+00:00'
        },
        {
          cardName: 'Test',
          cardActualTime: 3,
          cardDate: '2020-10-15T08:21:57.000+00:00'
        },
        {
          cardName: 'addCard',
          cardActualTime: 8,
          cardDate: '2020-10-18T00:00:00.000+00:00'
        }
      ]
    },
    {
      assignmentName: 'test',
      billableTime: 10,
      estimateTime: 10,
      completedStatus: false,
      totalActualTime: 21,
      cardObj: [
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:49.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:49.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:49.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:50.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:55.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:55.000+00:00'
        },
        {
          cardName: 'Test API',
          cardActualTime: 3,
          cardDate: '2020-10-15T07:24:56.000+00:00'
        }
      ]
    },
    {
      assignmentName: 'fix bug',
      billableTime: 4,
      estimateTime: 4,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'string',
      billableTime: 10,
      estimateTime: null,
      completedStatus: true,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fix bug',
      billableTime: 1,
      estimateTime: 1,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fufu',
      billableTime: 1,
      estimateTime: 1,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fufu',
      billableTime: 1,
      estimateTime: 1,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fastnet3',
      billableTime: 4,
      estimateTime: 4,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fastnet3',
      billableTime: 4,
      estimateTime: 4,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: null,
      billableTime: null,
      estimateTime: null,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: null,
      billableTime: null,
      estimateTime: null,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: null,
      billableTime: 4,
      estimateTime: 12,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'fastnet4',
      billableTime: 4,
      estimateTime: 4,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: null,
      billableTime: null,
      estimateTime: null,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'test deleted query',
      billableTime: 1,
      estimateTime: 2,
      completedStatus: true,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'DeletedStatus',
      billableTime: 100,
      estimateTime: 100,
      completedStatus: true,
      totalActualTime: null,
      cardObj: []
    },
    {
      assignmentName: 'do something',
      billableTime: null,
      estimateTime: null,
      completedStatus: false,
      totalActualTime: null,
      cardObj: []
    }
  ]

  constructor(private http: HttpClient) { }

  getAllCards(): CardList[] {
    return this.cardListFakeResponse;
  }
}
