run: format
	npm run dev

test: format
	npm run test

playwright: format
	npm run test:playwright

format:
	npm run format

studio:
	npx prisma studio

prisma-update:
	@rm -rf prisma/migrations \
	&& npx prisma migrate dev --name init \
	&& npx prisma generate
