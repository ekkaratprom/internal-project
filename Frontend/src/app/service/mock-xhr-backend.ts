import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
    private cards = [
        {
            id: 1,
            projectId: 1,
            taskName: 'write card component',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        },
        {
            id: 2,
            projectId: 3,
            taskName: 'write card form',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        },
        {
            id: 3,
            projectId: 2,
            taskName: 'write card form list',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        }, {
            id: 4,
            projectId: 3,
            taskName: 'write card UI',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        }, {
            id: 5,
            projectId: 2,
            taskName: 'write card service',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        }, {
            id: 6,
            projectId: 2,
            taskName: 'write api get/post',
            estimateTime: 8,
            actualTime: 0,
            referenceLink: 'www.xyz.com',
            taskDate: '12/09/2020',
            completedStatus: true,
        }
    ];

    handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
            let responseOptions;
            switch (request.method) {
                case 'GET':
                    if (request.urlWithParams.indexOf('cards?projectId=') >= 0 || request.url === 'cards') {
                        let projectId;
                        if (request.urlWithParams.indexOf('?') >= 0) {
                            projectId = request.urlWithParams.split('=')[1];
                            if (projectId === 'undefined') { projectId = ''; }
                        }
                        let cards;
                        if (projectId) {
                            cards = this.cards.filter(i => i.projectId === projectId);
                        } else {
                            cards = this.cards;
                        }
                        responseOptions = {
                            body: { mediaItems: JSON.parse(JSON.stringify(cards)) },
                            status: 200
                        };
                    } else {
                        let mediaItems;
                        const idToFind = parseInt(request.url.split('/')[1], 10);
                        mediaItems = this.cards.filter(i => i.id === idToFind);
                        responseOptions = {
                            body: JSON.parse(JSON.stringify(mediaItems[0])),
                            status: 200
                        };
                    }
                    break;
                case 'POST':
                    const card = request.body;
                    card.id = this._getNewId();
                    this.cards.push(card);
                    responseOptions = { status: 201 };
                    break;
                case 'DELETE':
                    const id = parseInt(request.url.split('/')[1], 10);
                    this._deleteCard(id);
                    responseOptions = { status: 200 };
            }

            const responseObject = new HttpResponse(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => {
            };
        });
    }

    _deleteCard(id) {
        const card = this.cards.find(i => i.id === id);
        const index = this.cards.indexOf(card);
        if (index >= 0) {
            this.cards.splice(index, 1);
        }
    }

    _getNewId() {
        if (this.cards.length > 0) {
            return Math.max.apply(Math, this.cards.map(card => card.id)) + 1;
        } else {
            return 1;
        }
    }
}
